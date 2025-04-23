export const getPosts=async()=>{
    const res=await fetch("https://api.startups.com/posts",{
        method:"GET",
        headers:{
        "Content-Type":"application/json",
        },
      });
return res;
    }