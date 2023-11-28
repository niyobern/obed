import React from 'react'

import {
    FaFacebook,
    FaYoutube,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-cyan-900 text-gray-300 px-2'>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white'>
        <p className='py-4'>© 2023 Restore Health Initatives.</p>
        <div className='flex justify-between gap-4 pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
        </div>
        </div>
    </div>
  )
}

export default Footer