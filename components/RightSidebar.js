import React from 'react'
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="  hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px] bg-black text-zinc-300 text-xl">
      <div className="flex items-center text-gray-500 border-b-2 border-zinc-700 pb-3">
        <p className="flex text-lg font-semibold flex-grow pl-5">Followers</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-white">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-white ">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-white">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name="ASDF"
        src="https://images.pexels.com/photos/53754/pexels-photo-53754.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2"
        status="online"
      />
      <Contacts
        name="QWER"
        src="https://images.pexels.com/photos/53754/pexels-photo-53754.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2"
        status="offline"
      />
      <Contacts
        name="ZXCV"
        src="https://images.pexels.com/photos/53754/pexels-photo-53754.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2"
        status="online"
      />
    </div>
  )
}

export default RightSidebar
