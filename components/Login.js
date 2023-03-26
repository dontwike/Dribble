import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image"; 
import logo from "../styles/logo.png"

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <Image
        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Fireman_basketball_by_mimooh.svg/640px-Fireman_basketball_by_mimooh.svg.png"
        alt = {logo}
        src = {logo}
        width={200}
        height={200}
      />
      <a
        onClick={signIn}
        className="p-4 mt-6 cursor-pointer bg-blue-500 rounded-full text-white"
      >
        Login To Dribble
      </a>
    </div>
    //     <div className="flex flex-col items-center mx-auto">
    //       <Image
    //         src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
    //         height={240}
    //         width={240}
    //       />
    //       <a
    //         onClick={signIn}
    //         className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white">
    //         Login
    //       </a>
    //     </div>
  );
};

export default Login;
