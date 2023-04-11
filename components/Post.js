import React from "react";
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
import Image from "next/image";

const Post = ({ post }) => {
  return (
    <div className="flex flex-col" key={post.id}>
      <div className="bg-zinc-900 mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            src={post.profilePic}
            className="rounded-full w-10 h-10"
          />
          <div>
            <p className="font-medium text-white text-xl pl-3">{post.name}</p>
            <p className="text-white text-base pl-3">{post.timeStamp}</p>
          </div>
        </div>
        <p className="py-4 text-white text-lg pl-3">{post.post}</p>
      </div>
      
      {/* If any Images are found */}
      {post.image != null && (
        <div className="relative h-60 md:h-96 bg-white">
          <Image src={post.image} objectFit="cover" layout="fill"></Image>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-center bg-zinc-900 p-2">
        <div className="flex items-center space-x-1 text-white hover:bg-zinc-500 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FcLike className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 text-white hover:bg-zinc-500 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FcComments className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="flex items-center space-x-1 text-white hover:bg-zinc-500 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FcShare className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
