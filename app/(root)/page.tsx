import SearchForm from "../components/SearchForm";
import Projectcard from "../components/Projectcard";
import {PrismaClient} from '@prisma/client';
import { Suspense } from "react";
import { getprojectId, getprojects } from "@/lib/query";



export default async function Home({searchParams}:{
  searchParams: Promise<{query?:string}>
}) {
  const query =(await searchParams).query;
  const prisma = new PrismaClient();
  const allStartups = await getprojects();
  const post = allStartups;

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
    <h1 className="heading">Pitch your Idea , <br/> collabrate  and learn together with diffrent develpoer <br/>  inspire and keep track of all your project progress </h1>
    <p className="sub-heading !max-w-3xl"> Sumbit idea , collabrate on idea  and finish the unfishied project </p>

    <SearchForm query={query}/>
    </section>
<section className="section-container">
<p className ="text-30-semibold">
  {query ?`Search results for ${query}`: 'Latest Projects'}
</p>
<Suspense fallback={<p>Loading...</p>}>
<ul className="mt-7 card_gird">
{post?.length > 0 ? (
            post.map((post: Projectcard) => (
              <Projectcard key={post?.id} post={post} />
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
