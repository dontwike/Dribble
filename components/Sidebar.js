import React from "react";
import Sidebaritem from "./SidebarItem";
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();

  const CopyOnClick=() => {
    navigator.clipboard.writeText(session?.user.email)
    alert("Text copied successfully")
  };

  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:max-w-xs bg-black text-white">
      <div className="flex items-center space-x-2 py-10 p-4 rounded-xl cursor-pointer">
        <Image
          alt="Image Not Available"
          // src={session?.user.image}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Cartoon_Border_Collie.png"
          width={250}
          height={250}
          className="rounded-full cursor-pointer border-2 border-zinc-700"
        />
      </div>
      <p className="hidden sm:inline-block font-medium font-serif text-2xl text-center leading-5 px-5 py-5 text-zinc-300 border-t-2 border-zinc-500">
        {session?.user.name}
      </p>

      {/* <p className="block text-base font-sans font-medium text-left py-3 px-5 text-zinc-300">
        Hey, {session?.user.name} thanks for joining the network!!!!
      </p> */}

      {/* <p className="block text-base font-serif font-medium text-left py-3 px-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-300" onClick={CopyOnClick}>Email:- {session?.user.email}</p> */}
      
      {/* <Sidebaritem Icon={ImUsers} value="Friends" />
      <Sidebaritem Icon={MdGroups} value="Groups" /> */}
      {/* <Sidebaritem Icon={MdOutlineOndemandVideo} value="News" /> */}
      {/* <Sidebaritem Icon={BsStopwatch} value="Memories" /> */}
    </div>
  );
};

export default Sidebar;
