import React from 'react'
import SigninForm from '../components/SigninForm/SigninForm.jsx'
import Dropdown from '../assets/dropdown.svg'
import LogoNav from '../components/LogoNav.jsx'

function Signin() {
  return (
    <div>
        <LogoNav/>
        <div className=' w-[90%] mt-24 mx-auto my-2 flex flex-col-reverse basis-1/2 h-fit md:flex-row xl:w-[70%] 2xl:mt-32'>
        <div className='basis-7/12 w-10/12 mx-auto mb-24'>
                <div className='w-10/12 mx-auto'>
                    <div className='w-9/12 mx-auto'>
                        <h1 className='text-red-500 font-bold text-l text-center mb-12 md:text-xl lg:text-2xl'>Welcome Back!</h1>
                        <SigninForm/>
                        <p className='text-[#B3B1B1] text-xs text-center mt-4'>Don't have an account? <span className='font-bold text-[#626060]'><a href="./Signup">Create an account</a></span></p>
                    </div>
                </div>
        </div>
        <div className='image-section2 flex items-end'>
                <div className='bg-white opacity-75 w-full h-[90%] rounded-tr-3xl flex items-center'>
                    <div className='flex flex-col gap-y-20 w-2/3 w-3/4 mx-auto'>
                        <h3 className='text-3xl w-3/4 font-bold text-[#574240]'>Quality Products, Best Outputs</h3>
                        <button className='flex bg-[#ffff] justify-between border-2 border-[#AF1313] p-3 px-4 w-[60%]'>
                            <span className='text-[#AF1313] font-bold text-sm w-full'>Shop with Marcsonic</span>
                            <img src={Dropdown} alt="" />
                        </button>
                    </div>
                </div>  
        </div>        
        </div>
    </div>
)
}

export default Signin