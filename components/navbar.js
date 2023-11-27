import Link from "next/link"
import Image from "next/image"
import Logo from "/public/images/logo.png"
export default function NavBar(){
    return (
        <div className="bg-cyan-900 md:bg-transparent flex justify-between w-full md:w-11/12 lg:w-10/12 mx-auto text-white p-2 md:p-0">
            <Image src={Logo} alt="image" className='w-16 md:w-24 h-10 md:h-16 lg:w-32 lg:h-24'/>
            <div className="flex gap-20">
                <div className="hidden md:flex gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                    <Link href="/">Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#service">Service</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <Link href="/join" className="hover:bg-white hover:text-cyan-900 rounded-l-full h-fit w-fit rounded-r-full p-2 px-4 border-orange-500 border">Join The Team</Link>
            </div>
        </div>
    )
}