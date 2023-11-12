import { useRouter } from "next/router";
import axios from "axios";
import Plan from "@/components/plan";
import { useState, useEffect } from "react";

export default function Ikofi(){
    const router = useRouter()
    const [days, setDays] = useState(0)
    const [plans, setPlans] = useState([])
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))
        axios.get("https://nvb_backend-1-z3745144.deta.app/users/details", { "headers": { "Authorization": token}})
        .then((res) => setDays(res.data.days_remaining))
        .catch((err) => router.replace("/login"))
        axios.get("https://nvb_backend-1-z3745144.deta.app/subscription/package")
        .then((res) => setPlans(res.data))
    
    }, [router])
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <span className="font-medium text-sm">Igihe usigaranye</span>
                <div className="border border-gray-200 flex flex-col text-xs font-medium w-fit py-1 px-16 rounded items-center">
                    <span>{days}</span>
                    <span>iminsi</span>
                </div>
                <span className="font-medium text-sm">Gura ifatabuguzi</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                {plans.map( (item, index) => <Plan plan={item} key={index}/>)}
            </div>
        </div>
    )
}