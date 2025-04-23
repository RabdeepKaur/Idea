import{z} from "zod";

export const formScehma= z.object({
    title:z.string().min(1).max(500),
    description: z.string().min(1).max(500),
    category:z.string().min(1).max(50),
    link:z.string().
    url().
    refine(async (url) => {
        try {
            const res = await fetch(url, { method: 'HEAD' });
            const contentType = res.headers.get("content-type");
            if (contentType?.startsWith('image/')) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }),
    github:z.string().url().min(10).max(100),
    pitch:z.string().min(20).max(500),
    coverImage:z.string().url().min(10).max(100),
   
})
