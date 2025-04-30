import Projectcard from '@/app/components/Projectcard'
import React from 'react'
import { prisma } from '@/utils/prisma'
import { Suspense  } from "react";
import { getprojectId, getprojects } from "@/lib/query";
import DiscoverSearch from '@/app/components/DiscoverSearch'
import SearchForm from "@/app/components/SearchForm";


const page =  async ({searchParams}:{
  searchParams: Promise<{query?:string}>
}) => {
  const posts = await prisma.post.findMany(({
    include: {
      author: true, // this pulls in { id, name, ... } from the User model
    },
  }));
  const allStartups = await getprojects();
  const query =(await searchParams).query;
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

  return (
    <>
    <div>
      <div>
      <section className="pink_container2">
<DiscoverSearch activeStatus={undefined} onStatusToggle={undefined} activeCategory={undefined} onCategoryToggle={undefined}/>
<SearchForm query={query}/>
  
</section>
</div>
<div className=" px-[30px] text-30-semibold justify-center text-center mt-5">
{query ?`Search results for ${query}`: 'Latest Projects'}
</div>
      <Suspense fallback={<p>Loading...</p>}>
    <ul className="mt-7 card_gird-sm">
{posts?.length > 0 ? (
            posts.map((post: { id: number; [key: string]: any }) => (
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
      </div>
    
      </>
  )
}

export default page

