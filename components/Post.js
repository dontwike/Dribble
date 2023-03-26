import React from "react";
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-zinc-900 mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Cartoon_Border_Collie.png"
            className="rounded-full w-10 h-10"
          />
          <div>
            <p className="font-medium text-white text-xl pl-3">Pranjal Goyal</p>
            <p className="text-white text-base pl-3">Time of post</p>
          </div>
        </div>
        <p className="py-4 text-white text-lg pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      {/* If any Images are found */}
      <div className="relative h-60 md:h-96 bg-zinc-900">
        <Image
          src="https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="No Image"
          objectFit="cover"
          layout="fill"
        ></Image>
      </div>

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
