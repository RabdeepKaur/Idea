import React from 'react';
import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';



const Projectcard = ({post}:{post:Projectcard}) => {
const {_createAt,views,author:{_id:authorId , name},title,category,description,_id}=post;

  return (
    <li className="project-card group">
<div className='flex-between'>
    <p className='project_card_date'>
        { formatDate(_createAt)}
    </p>
    <div className="flex gap-1.5">
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
         <h3 className='text-20-semibold line-clamp-1'>{title}</h3>
         </Link>

         <Link href={`/project/${authorId}`}>
         <img src="https://via.placeholder.com/150" alt="project" width={48} height={48} className="rounded-full"/>
         </Link>

         <Link href={`/project/${description}`}>
         <p className="project_card_description">{description}</p>
         </Link>

         <img src="https://via.placeholder.com/150" alt="project"  className="project-card_img"/>

         <div className="flex-between gap-3 mt-5">
            <Link href={`/?query=${category.toLowerCase()}`}>
            <p className='text-16-medium'>{category}</p>
            </Link>
            <button className="project-btn" aschild="true">
                <Link href={`/project/${_id}`}>
Detail
</Link>
            </button>

         </div>
    </div>
</div>
    </li>
  )
}

export default Projectcard
