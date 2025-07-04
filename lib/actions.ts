"use server"

import { parseServerActionResponse } from "./utils";
import { getSession } from "next-auth/react"; // Import getSession to retrieve session
import { prisma } from "../prisma"; // Ensure prisma is imported correctly
import slugify  from "slugify";


export const createPitch = async (
    state: any,
    form: FormData,
    pitch: string,
  ) => {
    
    const session = await getSession(); // Ensure session is defined
    if (!session)
   
      return parseServerActionResponse({
        error: "Not signed in",
        status: "ERROR",
      });
  
    const { title, description, category, link } = Object.fromEntries(
      Array.from(form).filter(([key]) => key !== "pitch"),
    ) as { title: string; description: string; category: string; link: string };
  
    const slug = slugify(title as string, { lower: true, strict: true });
  
    try {
      const startup = {
        title: title as string,
        description: description as string,
        category: category as string,
        image: link as string,
        slug: {
          _type: slug,
          current: slug,
        },
        author: {
          connect: {
            id: session?.user?.id ? parseInt(session.user.id, 10) : undefined,
          },
        },
        pitch,
      };
  
     const result = await prisma.post.create({
        data: {
            ...startup,
        },
     });
  
      return parseServerActionResponse({
        ...result,
        error: "",
        status: "SUCCESS",
      });
    } catch (error) {
      console.log(error);
  
      return parseServerActionResponse({
        error: JSON.stringify(error),
        status: "ERROR",
      });
    }
  };
