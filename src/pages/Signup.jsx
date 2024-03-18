import React from 'react'
import Form from '../components/Form/Form.jsx'
import Logo from '../assets/MARCSONIC.svg'
import Button from '../components/Button/Button.jsx'
import Dropdown from '../assets/dropdown.svg'
import LogoNav from "../components/LogoNav.jsx"

const Signup = () => {
  return (
    <div>
      <LogoNav/>
      <div className=' w-[90%] mt-24 mx-auto my-2 flex flex-col-reverse basis-1/2 h-5/6 md:flex-row xl:w-[70%]'>
        <div className='basis-7/12 w-10/12 mx-auto mb-24'>
          <div className='w-10/12 mx-auto'>
            {/* <img className='mb-20' src={Logo} alt="" /> */}
            <div className='w-9/12 mx-auto'>
                <h1 className='text-red-500 font-bold text-l text-center mb-9 md:text-xl lg:text-2xl'>Create an account with Marcsonic</h1>
                <Form/>
                <p className='text-[#B3B1B1] text-xs text-center mt-4'>Already have an account? <span className='font-bold text-[#626060]'><a href="./Signin">Login</a></span></p>
            </div>
          </div>
        </div>
        <div className='image-section flex items-end'>
          <div className='bg-white opacity-75 w-full h-[90%] rounded-tr-3xl '>
              <div className='flex flex-col gap-y-24 w-3/4 mx-auto justify-center h-full mt-14'>
                <h3 className='text-3xl w-3/4 font-bold text-[#574240]'>Organized Sound, Easy Life</h3>
                <button className='flex justify-between border-2 border-[#AF1313] p-3 px-4 w-[50%]'>
                  <span className='text-[#AF1313] font-bold text-sm'>Shop with Marcsonic</span>
                  <img src={Dropdown} alt="" />
                </button>
              </div>
          </div>  
        </div>        
      </div>
    </div>
  )
}

export default Signup