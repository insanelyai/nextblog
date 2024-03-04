import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <>
      <div className='w-[100%] h-[100px] px-20 flex items-center justify-between'>
        <div className='text-2xl font-bold tracking-wider'>NEXTBlog</div>
        <div className='flex items-center justify-center gap-3'>
          <NavLinks />
        </div>
      </div>
    </>
  );
};

export default Navbar;
