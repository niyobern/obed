import Link from "next/link"
import Image from "next/image"
import Logo from "/public/images/logo.png"
export default function NavBar(){
    return (
        <div className="flex justify-between w-full md:w-11/12 lg:w-10/12 mx-auto text-white">
            <Image src={Logo} alt="image" className='w-16 md:w-24 h-10 md:h-16 lg:w-32 lg:h-24'/>
            <div className="flex gap-20">
                <div className="flex gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                    <div>Home</div>
                    <div>About</div>
                    <div>Service</div>
                    <div>Contact</div>
                </div>
                <Link href="/join" className="hover:bg-white hover:text-cyan-900 rounded-l-full rounded-r-full p-2 px-4 border-orange-500 border">Join The Team</Link>
            </div>
        </div>
    )
}