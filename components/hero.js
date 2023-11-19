import Image from "next/image";
import { LuArrowRightToLine } from "react-icons/lu";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import Link from "next/link";

export default function Hero({ loggedIn }){
    return (
        <div className="bg-indigo-950 w-full flex flex-col justify-between px-4 md:px-0">
            <div className="flex justify-between w-full md:w-2/3 mx-auto py-6 items-center">
                <div className="flex gap-2">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      className="h-10 w-10 rounded-full"
                      width={40}
                      height={40}
                      priority
                    />
                    <h1 className="text-white text-center self-center text-xl font-bold">JIPROVISIONAL</h1>
                </div>
                <div className="hidden md:flex gap-4 text-white items-center">
                    <Link href={loggedIn ? "/home": "/register"} className="border-2 border-sky-500 py-1 px-2 rounded-sm flex gap-2 items-center hover:bg-sky-200 cursor-pointer hover:text-black">
                        <BsFillPersonPlusFill/>
                        {loggedIn ? "Jya aho bigira": "Iyandikishe"}</Link>
                    <Link href={loggedIn ? "/logout": "/login"} className="border-2 border-sky-500 py-1 px-2 rounded-sm flex gap-2 items-center hover:bg-sky-200 cursor-pointer hover:text-black">
                        <LuArrowRightToLine/>
                        {loggedIn ? "Sohoka": "Injira"}</Link>
                    <Link href="/" className="border-2 border-sky-500 py-1 px-2 rounded-sm flex gap-2 items-center hover:bg-sky-200 cursor-pointer hover:text-black">
                        <BiWorld/>
                        Ikinyarwanda</Link>
                </div>
                <div className="group">
                    <AiOutlineMenu color="white" className="h-6 w-6 flex md:hidden"/>
                    <div className="flex-row-reverse hidden group-hover:flex md:hidden absolute top-0 right-0 z-50">
                        <div className="w-fit h-full bg-white shadow shadow-blue-950">
                            <div className="flex flex-col gap-2">
                                <Link href="/login" className="font-medium text-blue-950 border-b-2 p-2 pr-12 border-blue-950">Injira</Link>
                                <Link href="/register" className="font-medium text-blue-950 border-b-2 p-2 pr-12 border-blue-950">Iyandikishe</Link>
                                <Link href="/login" className="font-medium text-blue-950 border-b-2 p-2 pr-12 border-blue-950">Ikinyarwanda</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 md:w-7/12 mx-auto py-24">
                <div className="flex flex-col gap-8">
                    <p className="text-white font-bold text-2xl">{loggedIn ? "Igihe cyageze ngo ukomeze wige. Twagiye!": "Uburyo bwa mbere bworoshye bwo kwigira provisoire mu Rwanda!"}</p>
                    <div className="flex gap-2">
                        <Link href={loggedIn ? "/home": "/register"} className="bg-sky-300 py-1 px-2 rounded-sm">{loggedIn ? "Jya aho bigira": "Fungura Konti"}</Link>
                        {!loggedIn && <Link href="/login" className="bg-sky-300 py-1 px-2 rounded-sm">Inira muri konti</Link>}
                    </div>
                </div>
                <Image
                  src="/images/man-on-comp.png"
                  alt="Man on comp"
                  width={600}
                  height={400}
                  className="h-full w-fit"
                />
            </div>
        </div>
    )
}