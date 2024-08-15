"use client";
import { useGetBlogsQuery } from "@/redux/features/api/apiSlice";
import React from "react";
import BlogCard from "../BlogCard";

const HomePage = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery();

  if (isLoading) {
    return <p>Loading...!</p>;
  }

  return (
    <div className='grid grid-cols-3 gap-6 py-20 max-w-screen-xl mx-auto'>
      {blogs?.map((blog) => (
        <BlogCard key={blog._id} blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default HomePage;
