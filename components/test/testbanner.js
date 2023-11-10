import Image from "next/image"
import Link from "next/link"
import { BsCheck } from "react-icons/bs"

export default function TestBanner({ id, close }){
    return (
        <div className="bg-white rounded w-full md:w-11/12 h-5/6 lg:w-2/3">
            <div className="flex flex-col py-4">
                <div className="flex flex-row-reverse justify-between px-4">
                    <button className="bg-blue-600 hover:bg-blue-800 px-1 font-bold text-white rounded" onClick={close}>Close</button>
                    <div className="font-bold text-lg">Ibirimo</div>
                    <div className="font-bold text-lg invisible">Ibirimo</div>
                </div>
                <div className="flex flex-col px-2 md:px-4 lg:px-6 gap-2">
                    <div className="flex flex-col md:grid grid-cols-12 gap-4">
                        <div className="col-span-4 h-32 relative">
                          <Image
                            alt="Thumbnail"
                            src="/images/Kinya-thumb.png"
                            fill
                          />
                        </div>
                        <div className="flex flex-col gap-4 col-span-8">
                            <p className="font-medium">Isuzuma #K003: riteguye nk&apos;ikizamini cy&apos;uruhushya rw&apos;agateganyo rwa Polisi.</p>
                            <p className="text-sm">Iri suzumabumenyi rifite ibibazo 20 bibajijwe nk&apos;uko Polisi y&apos;u Rwanda ibaza mu kizamini cy&apos;uruhushya rw&apos;agateganyo.</p>
                        </div>
                    </div>
                    <div className="bg-blue-700 w-full px-2 lg:px-4 py-2 lg:py-3 text-white flex justify-between rounded">
                        <span className="font-semibold text-lg">Wabishobora</span>
                        <Link href={`/tests/${id}`} className="px-1 border-2 border-white rounded">Tangira</Link>
                        <Link href={`/tests/${id}`} className="p-1 border border-white rounded hidden lg:flex invisible">Tangira</Link>
                    </div>
                    <div className="pt-4 gap-4 flex flex-col">
                        <div className="pl-4 flex border-l-4 border-sky-600">
                          <span className="font-medium text-gray-800">Amategeko y&apos;iri suzuma</span>
                        </div>
                        <div className="flex flex-col px-4 gap-2">
                            <div className="flex gap-3 items-center">
                                <BsCheck size={24} className="font-bold text-green-900"/>
                                <span className="text-sm text-gray-800"> Ibibazo birimo: 20</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <BsCheck size={24} className="font-bold text-green-900"/>
                                <span className="text-sm text-gray-800"> Igihe(iminota): 20</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <BsCheck size={24} className="font-bold text-green-900"/>
                                <span className="text-sm text-gray-800"> Inshuro wasubiramo: Zose ushaka</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}