import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { TfiGithub } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";
function RegisterPage() {
  return (
    <main className="md-12">
    <div className="bg-gradient-to-t from-[#bce6e4] to-[#f8fdfe]">
      <div className="container mx-auto px-3 lg:flex justify-center items-center lg:h-screen">
        <form className="bg-white shadow-2xl rounded-3xl py-8 lg:w-1/3 relative lg:mt-0 mt-12">
          <div className="py-12 flex flex-col gap-8 lg:px-12 px-4">
          <input
                type="text"
                placeholder="Full Name"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
              />
              <input
                type="password"
                placeholder="Password"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
              />
              <button
                type="button"
                className="w-full flex justify-center items-center gap-x-2 rounded-full h-14 text-white bg-[#0ca39a]"
              >
                Register
              </button>
              <p className="text-[#808080] text-center">
                Or use one of these options:
              </p>
              <div className="flex justify-center gap-x-10">
                <button className="text-[#1a73e8]">
                <FcGoogle  className='w-24 h-24 border p-5 border-gray-300 hover:border-[#26374d]'/>
                </button>
                <button className="text-[#333]">
                <TfiGithub className='w-24 h-24 border p-5 border-gray-300 hover:border-[#26374d]'/>
                </button>
                <button className="text-[#d62408] hover:text-[#ff5a5f]">
                <SiInstagram className='w-24 h-24 border p-5 border-gray-300 hover:border-[#26374d]'/>
                </button>
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
          </form>
      </div>
    </div>
  </main>
  )
}

export default RegisterPage