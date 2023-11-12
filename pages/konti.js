import { FiEdit } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { Router, useRouter } from "next/router";


export default function Konti(){
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const [close, setClose] = useState(true)
    const [received, setReceived] = useState(false)
    const [user, setuser] = useState({})
    const router = useRouter()
    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))
        axios.get("https://nvb_backend-1-z3745144.deta.app/details", { "headers": { "Authorization": token}})
        .then((res) => setuser({phone: res.data.phone, name: res.data.name}))
        .catch((err) => router.replace("/login"))
    
    }, [router])
    
    function handlePassword(e){
        const text = e.target.value
        setPassword(text)
    }
    function handleCode(e){
        const text = e.target.value
        setCode(text)
    }
    function requestCode(e){
        if (user.phone === undefined){
            return false
        }
        e.preventDefault()
        axios.post("https://nvb_backend-1-z3745144.deta.app/requestCode", {"phone": user.phone})
        .then((res) => setReceived(true))
    }
    function submitCode(e){
        e.preventDefault()
        if (!received){
            return false
        }
        axios.post("https://nvb_backend-1-z3745144.deta.app/changePassword", {"phone": phone, "password": password, "code": code})
    }
return (
    <div className="flex flex-col gap-4">
        <div className="text-xl font-medium">{user.name || ""}</div>
        <div className="text-xl font-medium">{user.phone || ""}</div>
        <div className="flex flex-col border border-gray-200 w-1/2 divide-y divide-solid cursor-pointer">
            <div className="flex flex-col p-1 hover:bg-gray-100">
                <span className="font-medium">Konti yange</span>
                <span className="text-xs font-medium">{user.phone || ""}</span>
            </div>
            <div onClick={() => setClose(false)} className="flex justify-between items-center hover:bg-gray-100 p-1 cursor-pointer">
                <div className="flex flex-col">
                    <span className="font-medium">ijambobanga</span>
                    <span className="text-xs font-medium">*******</span>
                </div>
                <FiEdit/>
            </div>
        </div>
        {!close && (
            <div className="z-50 fixed top-0 left-0 bg-gray-900 bg-opacity-50 w-screen h-screen flex items-center justify-center">
                <div className="bg-white w-10/12 md:w-1/2 lg:w-1/3 rounded h-5/6 flex flex-col p-2">
                    <div className="flex flex-row-reverse justify-between">
                        <div onClick={() => setClose(true)} className="hover:bg-blue-800 cursor-pointer font-bold text-lg bg-blue-700 text-white px-1 rounded">Close</div>
                        <div className="font-bold text-lg">Hindura</div>
                        <div className="font-bold text-lg text-white">Hindura</div>
                    </div>
                    <div className="flex flex-col px-4 py-12">
                        <div className="flex gap-4 border-b-2 border-black rounded pt-6 p-4">
                            <FaLock className="h-5 w-5"/>
                            <input type="password" required placeholder="New Password" value={password} onChange={handlePassword}  className="font-medium outline-none"/>
                        </div>
                        <div className="flex gap-4 border-b-2 border-black rounded pt-6 p-4 items-center">
                            <span className="text-xl font-bold">#</span>
                            <input type="text" required placeholder="000 000" value={code} onChange={handleCode}  className="font-medium outline-none"/>
                            <div onClick={requestCode} className="text-white font-medium bg-blue-600 rounded p-1 cursor-pointer hover:bg-blue-700">Saba Kode</div>
                        </div>
                        <div className="flex flex-col py-8">
                        <div onClick={submitCode} className={`${!received ? "bg-gray-400 hover:bg-gray-600 disabled": "bg-blue-600 hover:bg-blue-800"} cursor-pointer px-2 py-1 font-medium w-fit text-white rounded`}>Emeza</div>
                        </div>
                    </div>
                </div>
            </div>
        )}
</div>
)
}