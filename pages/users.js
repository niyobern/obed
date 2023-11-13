import { useState } from "react";
import Plan from "@/components/plan";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Users(){
    const [selected, setSelected] = useState(-1)
    const [plans, setPlans] = useState([])
    const [users, setUsers] = useState([])
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get("https://nvb_backend-1-z3745144.deta.app/users/unpaid", { "headers": { "Authorization": token}})
        .then((res) => setUsers(res.data))
        .catch((err) => router.replace("/login"))
        axios.get("https://nvb_backend-1-z3745144.deta.app/subscription/package")
        .then((res) => setPlans(res.data))
    
    }, [])
    return (
        <div className="flex flex-col md:grid grid-cols-2 gap-4">
            {users.map( (item, index) => (
            <div key={index} className="border border-gray-200 flex flex-col p-4 gap-4 w-full">
                <div className="text-xl font-bold text-gray-700 body-font font-poppins">{item.name}</div>
                <span className="font-medium text-gray-700">{item.phone}</span>
                <div onClick={() => setSelected(item.key)} className="text-blue-600 font-bold text-lg hover:text-white cursor-pointer hover:bg-blue-600 p-1 border-2 rounded text-center border-blue-600">Activate</div>
            </div>
            ))}
            {selected !== -1 && (
            <div className="z-50 fixed top-0 left-0 bg-gray-900 bg-opacity-50 w-screen h-screen flex items-center justify-center">
                <div className="bg-white w-10/12 md:w-1/2 rounded h-5/6 flex flex-col p-2">
                <div className="flex flex-col md:grid grid-cols-2 gap-8 overflow-auto">
                {plans.map( (item, index) => <Plan plan={item} key={index} user={selected}/>)}
            </div>
                </div>
            </div>
            )}
        </div>
    )
}