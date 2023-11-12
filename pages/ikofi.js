import { BsFillPlayFill } from "react-icons/bs";
export default function Ikofi(){
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <span className="font-medium text-sm">Igihe usigaranye</span>
                <div className="border border-gray-200 flex flex-col text-xs font-medium w-fit py-1 px-16 rounded items-center">
                    <span>6</span>
                    <span>iminsi</span>
                </div>
                <span className="font-medium text-sm">Gura ifatabuguzi</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col rounded border border-gray-200 w-full">
                    <div className="bg-gray-100 p-2 text-lg font-medium border-b border-gray-200 w-full text-center">
                        <span>Ukwezi 1</span>
                    </div>
                    <div className="flex flex-col gap-6 p-6">
                        <span className="text-center font-medium text-xl">Rwf 4000</span>
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
                                <span>Amasomo n&apos;amasuzumabumenyi yoseUbufasha kuri telefoni</span>
                            </div>
                        </div>
                        <div className="border-2 border-black text-lg font-medium w-full rounded text-center">Gura</div>
                    </div>
                </div>
                <div className="flex flex-col rounded border border-gray-200 w-full">
                    <div className="bg-gray-100 p-2 text-lg font-medium border-b border-gray-200 w-full text-center">
                        <span>Ukwezi 1</span>
                    </div>
                    <div className="flex flex-col gap-6 p-6">
                        <span className="text-center font-medium text-xl">Rwf 4000</span>
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
                                <span>Amasomo n&apos;amasuzumabumenyi yoseUbufasha kuri telefoni</span>
                            </div>
                        </div>
                        <div className="border-2 border-black text-lg font-medium w-full rounded text-center">Gura</div>
                    </div>
                </div>
            </div>
        </div>
    )
}