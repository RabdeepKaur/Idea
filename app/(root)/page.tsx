
import SearchForm from "../components/SearchForm";
import Projectcard from "../components/Projectcard";
import {PrismaClient} from '@prisma/client';
import { Suspense  } from "react";
import { getprojectId, getprojects } from "@/lib/query";
import { Sparkles, Users, LineChart } from "lucide-react";
import Button from "../components/Button";
import Transition from "../components/Transition";




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
      <br /> collabrate  and learn together {/*clock motion diaply one after another automatically */}
    </h1>
    {/* do i need to add link to these ?*/}  
    <Transition
    initial={{scale:0.5,opacity:0}}
    animate={{scale:1,opacity:1}}
    transition={{duration:0.6}}>
    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-3">
              <Sparkles className="text-white" size={28} />
            </div>
            <p className="mt-3 text-white font-medium text-lg">Pitch your idea </p>{/*here exit motion apon scroll*/}
            
            </div>
         
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-3">
              <Users className="text-white" size={28} />
            </div>
            <p className="mt-3 text-white font-medium text-lg" >Work with Developers</p>{/*here exit motion apon scroll*/}
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-3">
              <LineChart className="text-white" size={28} />
            </div>
            <p className="mt-3 text-white font-medium text-lg">Track Progress</p>{/*here exit motion apon scroll*/}
          </div>
        </div>
        </Transition>

{/*button*/}

<div className="flex justify-center items-center mt-5 mb-5 ">
   <Button></Button>
  
</div>


    <div className="mt-5"> 
    <p className="text-white !max-w-20xl"> Sumbit your idea , collabrate  with developers , get feedback and track your progress  </p>
    </div>


    </section>
    <section className="">
    <Transition
    initial ={{x: -100 ,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:1}}>
<div className="text-center mt-10 mb-10 ">
<h1 className="text-6xl font-bold work-sans p-10 mb-20">What do  we do ?</h1>
</div>
</Transition>
<Transition
    initial={{scale:0.5,opacity:0}}
    animate={{scale:1,opacity:1}}
    transition={{duration:0.6}}>
<div className="flex bg-white work-sans justify-center item-center mb-30"><h1 className="text-3xl font-semibold"> Don't just build it. Brag a little. We got you. </h1></div></Transition>
<div className="flex flex-col md:flex-row justify-center items-center gap-50 mt-10 mb-10 p-6">
  <div className="p-10 bg-white border border-gray-300 rounded-lg shadow-md max-w-xl work-sans ">Image </div>
  
  <div className=" text-xl p-10 bg-gray-200 border border-gray-300 rounded-lg shadow-md max-w-xl work-sans">Got a cool idea? Launching your first solo app? Let the world know! We help you share it in a way that grabs attention and gets people excited.
</div>
</div>
<Transition
    initial={{scale:0.5,opacity:0}}
    animate={{scale:1,opacity:1}}
    transition={{duration:0.6}}>
<div className="flex bg-white work-sans justify-center item-center"><h1 className="text-3xl font-semibold"> That feeling when you finally find an open-source project you vibe with  </h1></div></Transition>
<div className="flex flex-col md:flex-row justify-center items-center gap-50 mt-10 mb-10">
  <div className="  p-10 bg-white border border-gray-300 rounded-lg shadow-md max-w-xl work-sans">text </div>
  <div className=" text-xl p-10 bg-gray-200 border border-gray-300 rounded-lg shadow-md max-w-xl work-sans"> Tired of hunting for cool open-source projects?Dive into projects that actually excite you.—just check for the  "want contribution" tags, and jump right in. Contribute, connect, and grow with a community that builds together.
</div>
</div>
<Transition
    initial={{scale:0.5,opacity:0}}
    animate={{scale:1,opacity:1}}
    transition={{duration:0.6}}>
<div className="flex bg-white work-sans justify-center item-center"><h1 className="text-3xl font-semibold"> Your side project called—it wants feedback and a little less procatination</h1></div></Transition>
<div className="flex flex-col md:flex-row justify-center items-center gap-50 mt-10 mb-10">
  
  <div className="p-10 bg-white border border-gray-300 rounded-lg shadow-md max-w-xl work-sans">image  </div>
  <div className="text-xl p-10 bg-gray-200 border border-gray-300 rounded-lg shadow-md max-w-xl work-sans">  Sometimes all you need is a fresh set of eyes. Get real feedback from the community, discover new ideas, and unlock new depth in your project. The right feedback might be exactly what you need to make your project awesome again. </div>
</div>
</section>
{/* search bar 
    <SearchForm query={query}/>

<section className="section-container  py-10 px-5 md:px-10 lg:px-20">
<p className ="text-30-semibold ">
  {query ?`Search results for ${query}`: 'Latest Projects'}
</p>
<Suspense fallback={<p>Loading...</p>}>
<ul className="mt-7 card_gird-sm">
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
*/}
    </>
  );
}
