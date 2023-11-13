import Image from "next/image";
import { FaAsterisk } from "react-icons/fa"

export default function Incamake({ id, title }){
    return (
            <div className="flex flex-col">
                <div className="bg-blue-950 w-full">
                    <div className="flex w-full">
                        <div className="w-full"></div>
                        <div className="border-t-4 border-red-800 bg-white w-full"></div>
                    </div>
                    <div className="py-20 md:pb-24 px-4 md:px-12 flex flex-col text-white">
                        <span className="font-medium">Isomo</span>
                        <span className="font-bold text-xl">Isomo RYUZUYE ryo kwitegura ikizamini cy&apos;uruhushya rw&apos;agateganyo rwo gutwara</span>
                    </div>
                    <div className="bg-blue-600 w-full">
                        <div className="flex justify-start items-center text-white px-4 md:px-12 py-4 gap-4 md:gap-8 xl:gap-12">
                            <div className="flex flex-col items-center">
                                <span>igice</span>
                                <span className="text-4xl font-bold">#{id}</span>
                            </div>
                            <div>Ibyapa bibuza cyangwa ibitegeka</div>
                        </div>
                    </div>
                    <div className="pt-6 pb-2 w-full flex justify-center">
                        <Image
                          src="/images/logo.jpg"
                          alt="Logo"
                          width={30}
                          height={30}
                        />
                    </div>
                </div>
                <div className="flex flex-col pt-4 gap-4">
                    <div className="border-l-2 border-sky-600 pl-3 font-medium">Iby&apos;ingenzi</div>
                    <div className="pl-3 flex items-center gap-4">
                        <FaAsterisk/>
                        <span className="text-sm">{title}</span>
                    </div>
                    <div className="p-2 bg-green-200 text-green-900 text-sm">Kugirango utangire kwiga, kanda ahanditse &quot;Amakarita yo kwiga&quot;. nusoza, ukore umwitozo.</div>
                </div>
            </div>
    )
}