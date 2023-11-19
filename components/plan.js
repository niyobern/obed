import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
import axios from "axios";
export default function Plan( { plan, user }){
    const router = useRouter()
    function buySub(){
        const token = localStorage.getItem("token")
        if (router.pathname === "/users"){
            axios.post("https://nvb_backend-1-z3745144.deta.app/subscription/admin/pay", {"user": user, "package": plan.key}, { headers: { "Authorization": token}})
            .then((res) => alert(res.data))
        }
    }
    if (plan.cost === 0){
        return <div className="hidden"></div>
    }
    return (
        <div className="flex flex-col rounded border border-gray-200 w-full">
            <div className="bg-gray-100 p-2 text-lg font-medium border-b border-gray-200 w-full text-center">
                <span>Iminsi {plan.duration}</span>
            </div>
            <div className="flex flex-col gap-6 p-6">
                <span className="text-center font-medium text-xl">{plan.cost}</span>
                <div className="flex flex-col justify-start text-sm">
                    <div className="flex gap-1 items-center">
                        <BsFillPlayFill className="h-4 w-4 flex-none" color="blue"/>
                        <span>Ukwezi 1</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <BsFillPlayFill className="h-4 w-4 flex-none" color="blue"/>
                        <span>Ubufasha kuri telefoni</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <BsFillPlayFill className="h-4 w-4 flex-none" color="blue"/>
                        <span>Amasomo n&apos;amasuzumabumenyi yose, Ubufasha kuri telefoni</span>
                    </div>
                </div>
                <div onClick={buySub} className="border-2 border-black text-lg font-medium w-full rounded text-center">Gura</div>
            </div>
        </div>
    )
}