import Image from "next/image";
import React from "react";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import { AiFillMessage, AiFillBell, AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiFlag2Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

const Header = () => {
  const{ data: session } = useSession();
  return (
    <div className="sticky z-50 flex h-16 bg-zinc-900 items-center p-2 shadow-md top-0">
      {/* Left */}
      <div className="flex min-w-fit">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Cartoon_Border_Collie.png"
          height={40}
          width={40}
          className="ml-3"
          alt = "Image Not Available"
        />
        <div className="flex items-center space-x-2 px-9 ml-7 rounded-full bg-zinc-900 text-gray-500 ">
          <HiOutlineSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none outline-none flex-shrink text-white"
            type="text"
            placeholder="Search Dribble"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center  h-14 px-4 md:px-10 rounded-md md:hover:bg-zinc-700 cursor-pointer ">
            <HiOutlineHome className="mx-auto text-gray-500" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-zinc-700 cursor-pointer ">
            <RiFlag2Line className="mx-auto text-gray-500" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-zinc-700 cursor-pointer ">
            <MdOutlineOndemandVideo
              className="mx-auto text-gray-500"
              size={25}
            />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-zinc-700 cursor-pointer ">
            <IoGameControllerOutline
              className="mx-auto text-gray-500"
              size={25}
            />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-2 justify-end min-w-fit">
      <Image
      onClick={signOut}
        src = {session?.user.image}
        alt = "https://upload.wikimedia.org/wikipedia/commons/b/b0/Cartoon_Border_Collie.png"
        height={40}
        width={40}
        className="rounded-full cursor-pointer"
        />
        <p className="hidden xl:inline-flex font-semibold text-m whitespace-nowrap p-3 max-w-xs text-gray-500 hover:text-white">{session?.user.name}</p>

        <AiFillMessage
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-300 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-white"
        />
        <CiLogout
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-300 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-white"
          onClick={signOut}
        />
      </div>

    </div>
  );
};

export default Header;
