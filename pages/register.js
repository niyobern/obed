import { MdCall } from 'react-icons/md';
import { useState } from "react";
import Image from "next/image"
import { LuArrowRightToLine } from "react-icons/lu";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Register( { loggedIn }) {
    const [phone, setPhone] = useState("")
    const router = useRouter()
    function handlePhone(e){
        const text = e.target.value
        const value = text.replace(/\D/g, "")
        setPhone("07" + value.slice(2,10))
    }
    function handleSubmit(e){
        e.preventDefault()
        axios.post(`https://nvb_backend-1-z3745144.deta.app/users/?phone=${phone}`)
        .then((res) => {
            localStorage.setItem("phone", res.data)
            router.push("/verifyPhone")
        })
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
                <div className="flex flex-col pt-8 gap-4">
                    <div onClick={handleSubmit} className="border-2 p-2 border-blue-600 rounded text-blue-600 text-center font-bold hover:text-white hover:bg-blue-600 cursor-pointer">Ohereza code kuri phone yawe</div>
                </div>
            </div>
        </div>
    </div>
    )
}