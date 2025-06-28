import FAQSection from "../components/FQ";
import SearchForm from "../components/SearchForm";
import Projectcard from "../components/Projectcard";
import {PrismaClient} from '@prisma/client';
import { Suspense  } from "react";
import { getprojectId, getprojects } from "@/lib/query";
import { Users, LineChart, Lightbulb, FileText, Calendar } from "lucide-react";
import Button from "../components/Button";
import Transition from "../components/Transition";
import Image from "next/image";
import FloatingGhost from "../components/FolatingGhost";



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


    const steps = [
    {
      number: "01",
      title: "Confess",
      description: "List your ghost project and why you abandoned it",
      icon: "💭"
    },
    {
      number: "02", 
      title: "Connect",
      description: "Get matched with developers who want to help",
      icon: "🤝"
    },
    {
      number: "03",
      title: "Collaborate", 
      description: "Bring your project back to life together",
      icon: "🚀"
    }
  ];
 
  return (
    <>
    <section className=" bg-black flex flex-col justify-center items-center text-4xl md:text-6xl font-bold p-10 mb-20 mt-30  ">
      <div className="fxied inset-0 overflow-hidden pointer-events-none ">
  {Array.from({ length: 8 }).map((_, i) => (
    <FloatingGhost
      key={i}
      delay={i * 3} // Stagger the ghosts
      duration={5 + Math.random() * 3} // Random duration 5-8s
      size={40 + Math.random() * 30} // Random size 40-70px
      startY={Math.random() * 70 + 10} // Random Y position
    />
  ))}
</div>
      <div className="flex flex-row gap-4">
    <h1 className=" heading  ">
      GIVE LIFE TO YOUR GHOST PROJECTS   {/*clock motion diaply one after another automatically */}
    </h1>
    </div>
        <p className="text-white text-lg ">Turn abandoned repos into collaborative successes</p>
    <Image 
  src="/RIP.png"// Use the imported RIP image
  alt="RIP github projects" 
  className=" w-100 h-100"
  width={400}  // Add this
  height={400} // Add this too
/>
    {/* do i need to add link to these ?*/} 
    <h1 className=" text-white text-3xl font-bold p-5 "> What if that unfinished project becomes your greatest collaboration?</h1> 
    <Transition
    initial={{scale:0.5,opacity:0}}
    animate={{scale:1,opacity:1}}
    transition={{duration:0.6}}>
    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 p-10 mt-20 ">
          <div className="flex flex-col items-center border border-white rounded-lg p-5 hover:border-green">
            <div className="bg-black rounded-full p-3">
              <Lightbulb className="text-white" size={28} />
            </div>
            <p className="mt-3 text-white font-medium text-lg ">2 AM brilliant idea, 2 weeks later...🦗 </p>{/*here exit motion apon scroll*/}
            
            </div>
         
          <div className="flex flex-col items-center border border-white rounded-lg p-5 hover:border-green">
            <div className="bg-black rounded-full p-3">
              <FileText className="text-white" size={28} />
            </div>
            <p className="mt-3 text-white font-medium text-lg" >Perfect README, empty commits 📝</p>{/*here exit motion apon scroll*/}
          </div>
          
          <div className="flex flex-col items-center border border-white rounded-lg p-5 hover:border-green">
            <div className="bg-black rounded-full p-3">
              <Calendar  className="text-white" size={28} />
            </div>
            <p className="mt-3 text-white font-medium text-lg">That project you swore you finish someday ⏰</p>{/*here exit motion apon scroll*/}
          </div>
        </div>
        </Transition>

{/*button*/}

<div className="flex justify-center items-center mt-5 mb-5 ">
   <Button>
   </Button>
  
</div>


    <div className="mt-5"> 
    <p className="text-white !max-w-20xl">   </p>
    </div>


    </section>
    <section className="">
    <Transition
    initial ={{x: -100 ,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:1}}>
<div className="text-center mt-10 mb-10">
  <h1 className="text-6xl text-white font-bold work-sans mb-2">How it Works</h1>
  <p className="text-center text-white font-medium">
    Three simple steps to Resurrect your Abandoned projects
  </p>
</div>
</Transition>
    <div className="grid md:grid-cols-3 gap-8 mx-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-black p-8 rounded-xl border border-white hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <div className="text-green-400 text-sm font-bold mb-2">STEP {step.number}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white text-lg">{step.description}</p>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-500"></div>
              )}
            </div>
          ))}
        </div>
</section>


{/* 
    <section className="section-container  py-10 px-5 md:px-10 lg:px-20">
      <p className="text-30-semibold ">
        {query ? `Search results for ${query}` : 'Latest Projects'}
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
<FAQSection/>
    <section className="py-10 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dont Let Another Great Idea Gather Digital Dust
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Your next co-founder might be one click away
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors">
              Submit Your Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-green-900 px-6 py-3 rounded-lg transition-colors">
              Browse the Graveyard
            </button>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quick Project Submission
            </h3>
            <div className="grid md:grid-cols-3 gap-4 bg-green p-4 rounded-lg">
              <input 
                type="text" 
                placeholder="Project name"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green"
              />
              <input 
                type="url" 
                placeholder="GitHub repository URL"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-grenn"
              />
             <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors">
                Submit Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
