import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { BsEmojiSmile } from 'react-icons/bs';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GiConfirmed } from 'react-icons/Gi';

const CreatePost = () => {
  
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";
  const { data : session } = useSession();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const formData = new FormData();

    formData.append("file", imageToPost);
    console.log("imagetopost: " + imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("profilePic", session?.user.image);

    axios
      .post(FACEBOOK_CLONE_ENDPOINT, formData, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        inputRef.current.value = "";
        // dispatch(addPost(response.data));
        // console.log(response.data);
        removeImage();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className="bg-zinc-800 rounded-md shadow-md text-gray-500 p-5 divide-y">
       <div className="flex p-4 space-x-2 items-center">
       <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
          alt="No image"
        />
        <form className="flex flex-1 ">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium hover:text-white bg-zinc-800 px-4 text-zinc-300"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user.name}?`}></input>
          
          <button onClick={handleSubmit} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-1 px-5 rounded-full">
            Submit
          </button>
        </form>
       </div>
       {imageToPost && (
        <div
          onClick={removeImage}
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer">
          <img src={imageToPost} className="h-10 object-contain" />
          <RiDeleteBin6Line className="h-8 hover:text-red-500" />
        </div>
      )}
       <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-600 rounded-md">
          <HiOutlineVideoCamera className="text-red-500" size={20} />
          <p className="font-semibold text-gray-200">Live Video</p>
        </div>
        <div
          onClick={handleClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-600 rounded-md">
          <IoMdPhotos className="text-green-500" size={20} />
          <p className="font-semibold text-gray-200">Photo/Video</p>
          <input
            ref={hiddenFileInput}
            onChange={addImageToPost}
            type="file"
            accept="image/*"
            hidden
          />
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-600 rounded-md">
          <BsEmojiSmile className="text-yellow-400" size={20} />
          <p className="font-semibold text-gray-200">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
