import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='text-white w-full flex justify-between items-center md:px-20 py-5 px-5 stickey top-0 left-0 backdrop-blue-xl'>
        <div>
            <Link href={"/"} className="font-[200] text-3xl"> UPItrack </Link>
        </div>
        <div>
            <Link href={"https://www.google.com"} className="font-[800] text-3xl"> Portfolio</Link>
        </div>
    </div>
  )
}

export default Header