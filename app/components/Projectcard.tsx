import React from 'react';
import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';


interface ProjectCardProps {
  _id: any;
  _createAt: string;
  views: number;
  author: {
    id: string;
    name: string;
  };
  title: string;
  category: string;
  description: string;
  id: string;
}

const Projectcard = ({ post }: { post: ProjectCardProps }) => {
const {_createAt,views,author:{id:authorId , name},title,category,description,id}=post;

  return (
    <>
    <div className='card_grid px-10 py-5'>
    <li className="project_card  py-4">
<div className='flex-between'>
    <p className='project_card_date'>
        { formatDate(_createAt)}
    </p>
    <div className="flex gap-1.5 items-center">
        <EyeIcon className="size-[6px] text-black"/>
        <span className='text-16-medium'>{views}</span>
    </div>
</div>
<div className="flex-between mt-5 gap-5">
    <div className="flex-1">
        <Link href={`/project/${authorId}`}>
        <p className='text-16-medium  line-clamp-1'>{name}</p>
        </Link>
       
       <Link href={`/project/${post._id}`}>
         <h3 className='project_card_title line-clamp-1'>{title}</h3>
         </Link>

         <Link href={`/project/${authorId}`}>
         <img src="https://via.placeholder.com/150" alt="project" width={48} height={48} className="rounded-full"/>
         </Link>

         <Link href={`/project/${description}`}>
         <p className="project_card_description">{description}</p>
         </Link>

         <img src="https://via.placeholder.com/150" alt="project"  className="project-card_img"/>

         <div className="flex justify-between  items-center gap-3 mt-5">
            <Link href={`/?query=${category.toLowerCase()}`}>
            <p className='text-16-medium'>{category}</p>
            </Link>
            <button className="project-btn">
                <Link href={`/project/${id}`}>
Detail
</Link>
            </button>

         </div>
    </div>
</div>
    </li>
    </div>
    </>
  );
}

export default Projectcard
