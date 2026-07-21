import React from 'react'

const Header = () => {
  return (
    <div className='absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-[148px] py-4 bg-gradient-to-b from-black'>
        <img className='p-4 m-2 w-40 bg-gradient-to-b from-black'
         src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAUkLCBtHBbguPPqzaFOzEv4Pw_eS79j0y7ADR4hkB30-HkahpsUb5yvfzgKsfU2oNda-7hpkfYLnXhjc23JVT07PHsGgfsaHAB7qOhy2_5gn-nuKOVSUSBzn-i-O3ea2QQaXx3PYkHes.svg"       
          alt="logo" />
        <button className='text-white bg-red-700 rounded-sm p-2'>Sign In</button>
    </div>
  )
}

export default Header