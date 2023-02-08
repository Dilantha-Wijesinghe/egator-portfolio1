import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="hidden sm:flex flex-col items-center gap-3 absolute left-0 bottom-12 after:w-[1px] after:h-8  after:bg-colorPrimary">
      <a href="#" target="__blank">
        <BsLinkedin />
      </a>
      <a href="#" target="__blank">
        <BsGithub />
      </a>
      <a href="#" target="__blank">
        <FiDribbble />
      </a>
    </div>
  );
}

export default HeaderSocials