import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function POST(req:Request){
    try{
        const body=await req.json();
        const{title,description,category,link,github,pitch}=body;
        const startup=await prisma.post.create({
            data:{
                title,
                description,
                category,
                link,
                github,
                pitch,
            },
        });
        return NextResponse.json({ success: true, startup });
  } catch (error) {
    console.error("[STARTUP_CREATE]", error);
    return NextResponse.json({ success: false, message: "Internal Error" }, { status: 500 });
  }
}