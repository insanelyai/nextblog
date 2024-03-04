import Signup from "@/components/Auth/Signup/Signup";
import React from "react";

const page = () => {
  return (
    <>
      <div className='w-[100%] h-[calc(100vh-100px)] flex items-center justify-center '>
        <Signup />
      </div>
    </>
  );
};

export default page;
