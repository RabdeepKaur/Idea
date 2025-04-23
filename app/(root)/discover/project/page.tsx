import Projectcard from '@/app/components/Projectcard'
import React from 'react'
import { prisma } from '@/lib/prisma'
import { getprojectId, getprojects } from "@/lib/query";
import DiscoverSearch from '@/app/components/DiscoverSearch'


const page =  async () => {
  const posts = await prisma.post.findMany(({
    include: {
      author: true, // this pulls in { id, name, ... } from the User model
    },
  }));
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

  return (
    <div>
      <section className="pink_container2">
<DiscoverSearch activeStatus={undefined} onStatusToggle={undefined} activeCategory={undefined} onCategoryToggle={undefined}/>
      </section>
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
      </div>
  )
}

export default page

