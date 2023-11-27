import Link from "next/link"
import Image from "next/image"
export default function NavBar(){
    return (
        <div className="flex justify-between w-full md:w-11/12 lg:w-10/12 mx-auto text-white">
            <Image src="/images/logo.png" width={60} height={12}/>
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