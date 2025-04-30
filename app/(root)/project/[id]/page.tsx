import markdownit from 'markdown-it'
import React from 'react'
import { prisma } from '@/utils/prisma';
import { formatDate } from '@/lib/utils';
import { getprojects,getprojectId,getAuthorById } from '@/lib/query';
import Link from 'next/link';
import Image from 'next/image';


export const exprtimental_ppt=true;
const md=markdownit();

const page = async ({params}:{params:{id:string}}) => {
  const id = params.id;
  console.log({id});

 // Use findUnique instead of findMany when fetching a single record
  const post = await prisma.post.findUnique({
    where: { 
      id: parseInt(id) // Assuming your ID is a number
    }
  });

  console.log(JSON.stringify(post, null, 2));

  if(!post){
    return {
      notFound: true,
    }
  }
const parsedContent=md.render(post?.description || "")


const author = await getAuthorById(post.authorId);

  return (
    <div>
 <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?.createdAt.toISOString())}</p>

        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <img
          src={post.image ?? undefined}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.authorId}`}
              className="flex gap-2 items-center mb-3"
            >
              
              {author ? (
                <Image
                  src={author.image ?? '/default-avatar.png'}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-full drop-shadow-lg"
                />
              ) : (
                <p>No author information available</p>
              )}

              <div>
                {author && <p className="text-20-medium">{author.author.name}</p>}
                <p className="text-16-medium !text-black-300">
                  @{author ? author.author.githubUsername || 'Unknown' : 'Unknown'}
                </p>
              </div>
            </Link>

            <p className="category-tag">{post.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>

        <hr className="divider" />

      </section>
    </div>
  )
}

export default page
