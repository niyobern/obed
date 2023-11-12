import { BsFillPlayFill } from "react-icons/bs";
export default function Plan( { plan }){
    return (
        <div className="flex flex-col rounded border border-gray-200 w-full">
            <div className="bg-gray-100 p-2 text-lg font-medium border-b border-gray-200 w-full text-center">
                <span>{plan.duration}</span>
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
                <div className="border-2 border-black text-lg font-medium w-full rounded text-center">Gura</div>
            </div>
        </div>
    )
}