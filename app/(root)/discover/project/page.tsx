/*import Projectcard from '@/app/components/Projectcard'
import React from 'react'
import { prisma } from '@/lib/prisma'
import { getprojectId, getprojects } from "@/lib/query";

const page =  async () => {
  const posts = await prisma.post.findMany();
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
    <ul className="mt-7 card_gird">
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
*/
import Projectcard from '@/app/components/Projectcard'
import React from 'react'
import { prisma } from '@/lib/prisma'
import { getprojectId, getprojects } from "@/lib/query";

const Page = async () => {
  // Get projects from your custom function
  const allStartups = await getprojects();
  
  // Map the projects to the format your Projectcard component expects
  const mappedProjects = allStartups.map((startup) => ({
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
      <ul className="card_gird mt-7" >
        {mappedProjects.length > 0 ? (
          mappedProjects.map((project) => (
            <Projectcard
              key={project._id}
              post={project}
            />
          ))
        ) : (
          <p className="no-result">Oops! We don't have that, it could be a new idea</p>
        )}
      </ul>
    </div>
  )
}

export default Page