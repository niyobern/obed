import Image from "next/image"
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import Link from "next/link";

export default function Login(){
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    function handlePhone(e){
        const text = e.target.value
        const value = text.replace(/\D/g, "")
        setPhone("07" + value.slice(2,10))
    }
    function handlePassword(e){
        const text = e.target.value
        setPassword(text)
    }
    return (
        <div className="h-full flex flex-col gap-4 relative">
            <div className="bg-indigo-950 w-full flex flex-col justify-between fixed z-50">
                <div className="flex justify-between w-full px-2 md:w-2/3 mx-auto py-4 items-center">
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
                        <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">{"Iyandikishe"}</div>
                        <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">{"Injira"}</div>
                        <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">Ikinyarwanda</div>
                    </div>
                    <AiOutlineMenu color="white" className="h-6 w-6 flex md:hidden"/>
                </div>
            </div>
            <div className="bg-indigo-950 w-full flex flex-col justify-between sticky">
                <div className="flex justify-between md:w-2/3 mx-auto py-4">
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
                        <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">{"Iyandikishe"}</div>
                        <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">{"Injira"}</div>
                        <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">Ikinyarwanda</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center py-8">
                <h1 className="font-bold text-2xl">Injira</h1>
                <div className="w-full md:w-1/3 mx-auto pt-4 md:pt-8">
                    <div className="flex gap-4 border-b-2 border-black rounded pt-6 p-4">
                        <MdCall className="h-6 w-6"/>
                        <input type="phone" required placeholder="07xx xxx xxx" onFocus={() => phone === "07xx xxx xxx" && setPhone("")} value={phone.slice(0,10)} onChange={handlePhone}  className="font-medium outline-none"/>
                    </div>
                    <div className="flex gap-4 border-b-2 border-black rounded pt-6 p-4">
                        <FaLock className="h-5 w-5"/>
                        <input type="password" required placeholder="Password" onFocus={() => phone === "07xx xxx xxx" && setPhone("")} value={password} onChange={handlePassword}  className="font-medium outline-none"/>
                    </div>
                    <div className="flex gap-4 py-4 items-center">
                        <input type="checkbox" className="h-4 w-4 accent-blue-600"/>
                        <span className="text-sm">Munyibuke</span>
                    </div>
                    <div className="flex flex-col pt-8 gap-4">
                        <div className="border-2 p-2 border-blue-600 rounded text-blue-600 text-center font-bold font-bold hover:text-white hover:bg-blue-600 cursor-pointer">Injira</div>
                        <div className="flex justify-center text-sm gap-2">
                            <span>Ntiwibuka ijambobanga?</span>
                            <span>|</span>
                            <Link href="/register" className="hover:text-blue-600">Iyandikishe</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}