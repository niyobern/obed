import Image from "next/image"
import { BsCheck } from "react-icons/bs"

export default function TestIntro({ id, start, latestScore, lastDay, lastTime, length }){
    return (
        <div className="bg-white rounded w-full h-full">
            <div className="flex flex-col">
                <div className="flex flex-col px-2 gap-2">
                    <div className="flex flex-col md:grid grid-cols-12 gap-4">
                        <div className="col-span-4 h-32 relative">
                          <Image
                            alt="Thumbnail"
                            src="/images/Kinya-thumb.png"
                            fill
                            sizes="500"
                          />
                        </div>
                        <div className="flex flex-col gap-4 col-span-8">
                            <p className="font-medium">Isuzuma #K0{id}: riteguye nk&apos;ikizamini cy&apos;uruhushya rw&apos;agateganyo rwa Polisi.</p>
                            <p className="text-sm">Iri suzumabumenyi rifite ibibazo {length} bibajijwe nk&apos;uko Polisi y&apos;u Rwanda ibaza mu kizamini cy&apos;uruhushya rw&apos;agateganyo.</p>
                        </div>
                    </div>
                    <div className="bg-blue-700 w-full px-2 lg:px-4 py-2 lg:py-3 text-white flex justify-between items-center rounded">
                        <span className="text-sm font-medium">Latest score: {latestScore}/{length}</span>
                        <div onClick={start} className="cursor-pointer px-1 border-2 border-white rounded hover:bg-white hover:text-green-800">Tangira</div>
                        <div className="flex flex-col items-end">
                            <span className="text-xs font-medium">Igihe wakoreye: {lastDay}</span>
                            <span className="text-xs font-medium">{lastTime}</span>
                        </div>
                    </div>
                    <div className="pt-4 gap-4 flex flex-col">
                        <div className="pl-4 flex border-l-4 border-sky-600">
                          <span className="font-medium text-gray-800">Amategeko y&apos;iri suzuma</span>
                        </div>
                        <div className="flex flex-col px-4 gap-2">
                            <div className="flex gap-3 items-center">
                                <BsCheck size={24} className="font-bold text-green-900"/>
                                <span className="text-sm text-gray-800"> Ibibazo birimo: {length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}