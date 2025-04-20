
import SearchForm from "../components/SearchForm";
import Projectcard from "../components/Projectcard";
import {PrismaClient} from '@prisma/client';
import { Suspense  } from "react";
import { getprojectId, getprojects } from "@/lib/query";
import { Sparkles, Users, LineChart } from "lucide-react";
import Button from "../components/Button";



export default async function Home({searchParams}:{
  searchParams: Promise<{query?:string}>
}) {
  const query =(await searchParams).query;
  const prisma = new PrismaClient();
  const allStartups = await getprojects();
  const post = allStartups.map((startup) => ({
    ...startup,
    _id: startup.id,
    _createAt: startup.createdAt || new Date().toISOString(),
    views: startup.views || 0,
    author: startup.author || { id: 0, name: "Unknown" },
    description: startup.description || "No description available",
    title: startup.title || "Untitled",
    tags: startup.tags || [],
    image: startup.image || "https://via.placeholder.com/150",
    category: startup.category || "Uncategorized",
  }));

  const search=await getprojectId(1);
  console.log(JSON.stringify(search
    ,null,2));

   
/*
  const post = await prisma.post.findMany({
    include:{
      author:true,
    }
  })
  console.log(JSON.stringify(post,null ,2));
  */
/*
  const posts=[{
    _createAt:new Date().toISOString(),
    views:5,
    author:{id:1 , name:"author"},
    _id:1,
    description:'This is a description',
    title:'This is a title',
    tags:['tag1','tag2'],
    image:'https://via.placeholder.com/150',
    category:'category',
  }]*/
  return (
    <>
    <section className="pink_container">
    <h1 className="heading">Pitch your idea ,
      <br /> collabrate  and learn together 
    </h1>
    {/* do i need to add link to these ?*/}  
    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-3">
              <Sparkles className="text-white" size={28} />
            </div>
            <p className="mt-3 text-white font-medium text-lg">Inspire Others</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-3">
              <Users className="text-white" size={28} />
            </div>
            <p className="mt-3 text-white font-medium text-lg" >Work with Developers</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-3">
              <LineChart className="text-white" size={28} />
            </div>
            <p className="mt-3 text-white font-medium text-lg">Track Progress</p>
          </div>
        </div>


{/*button*/}

<div className="flex justify-center items-center mt-5 mb-5 ">
   <Button></Button>
  
</div>


    <div className="mt-5"> 
    <p className="text-white !max-w-20xl"> Sumbit your idea , collabrate  with developers , get feedback and track your progress  </p>
    </div>


    </section>


{/* search bar */}
    <SearchForm query={query}/>

<section className="section-container  py-10 px-5 md:px-10 lg:px-20">
<p className ="text-30-semibold ">
  {query ?`Search results for ${query}`: 'Latest Projects'}
</p>
<Suspense fallback={<p>Loading...</p>}>
<ul className="mt-7 card_gird">
{post?.length > 0 ? (
            post.map((post: { id: number; [key: string]: any }) => (
              <Projectcard
                key={post?.id}
                post={{
                  _id: post._id,
                  _createAt: post._createAt,
                  views: post.views,
                  author: post.author,
                  description: post.description,
                  title: post.title,
                  tags: post.tags,
                  image: post.image,
                  category: post.category,
                }}
              />
            ))
          )  : (
  <p className="no-result">Oops! We don't have that, it could be a new idea</p>
)}
</ul>
</Suspense>
</section>
 
    </>
  );
}
