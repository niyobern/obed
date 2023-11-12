import { MdCall } from 'react-icons/md';
import { useState } from "react";
import Image from "next/image"
import { AiOutlineMenu } from 'react-icons/ai';

export default function VerifyPhone() {
    const [code, setCode] = useState("")
    function handleCode(e){
        const text = e.target.value
        const value = text.replace(/\D/g, "")
        setPhone(value)
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
                    <span className="text-xl font-bold">#</span>
                    <input type="text" required placeholder="000 000" value={code} onChange={handleCode}  className="font-medium outline-none"/>
                </div>
                <div className="flex flex-col pt-8 gap-4">
                    <div className="border-2 p-2 border-blue-600 rounded text-blue-600 text-center font-bold hover:text-white hover:bg-blue-600 cursor-pointer">Komeza</div>
                </div>
            </div>
        </div>
    </div>
    )
}