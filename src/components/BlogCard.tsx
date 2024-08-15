import { Blog } from "@/redux/features/api/apiSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdBook } from "react-icons/io";
import { LuView } from "react-icons/lu";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { _id, title, image, date, read_time, author } = blog;

  return (
    <div className='shadow-xl rounded-md'>
      <div>
        <Image
          width={200}
          height={200}
          className='rounded-md w-full'
          src={image}
          alt={title}
        />
      </div>
      <div className='p-5 space-y-5'>
        <div>
          <h3 className='text-2xl font-bold text-center'>{title}</h3>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <Image
              width={200}
              height={200}
              className='w-10 h-10 rounded-full'
              src={author.image}
              alt={author.name}
            />
            <h4 className='text-base font-semibold'>{author.name}</h4>
          </div>
          <div>
            <Link
              className='text-lg font-medium px-3 py-2 bg-blue-600 text-white rounded'
              href={`/${_id}`}>
              View Details
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center gap-4 text-base font-medium text-slate-600'>
          <p>{date}</p>
          <p className='flex items-center gap-[5px]'>
            <IoMdBook /> {read_time}
          </p>
          <p className='flex items-center gap-[5px]'>
            <LuView /> {Math.ceil(Math.random() * 10) + 1}K views
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
