import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header className='lg:h-[100vh] sm:h-[68vh] h-[100vh] pt-[7rem] overflow-hidden '>
      <div className="container text-center h-[100%] relative">
        <h5>Hello I'm</h5>
        <h1>Dilantha Wijesinghe</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        
          <CTA/>
          <HeaderSocials />
        
        <div className=' bg-gradient-to-b from-colorPrimary to-transparent w-[22rem] h-[30rem] absolute left-1/2 -translate-x-1/2 mt-16 rounded-t-full overflow-hidden pt-20 px-6 pb-6'>
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='hidden sm:block absolute -right-9 bottom-20 rotate-90 font-light text-sm'> Scroll Down</a>
      </div>
    </header>
  );
}

export default Header