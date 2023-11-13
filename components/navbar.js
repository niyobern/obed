import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { FiLogOut } from "react-icons/fi"

export default function NavBar({title}){
    const router = useRouter()
    return (
        <div className="bg-indigo-950 flex px-2 md:px-24 lg:px-32 xl:px-48 py-2 justify-between text-white top-0">
            <div className="flex gap-1 text-white items-center">
                <div onClick={() => router.push("/")} className="flex gap-1">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        className="h-10 w-fit rounded-full"
                        width={30}
                        height={30}
                        priority
                    />
                    <h1 className="text-white text-center self-center text-2xl font-bold">Jiprovisional</h1>
                </div>
                <span className="text-lg font-medium">|</span>
                <span className="text text-gray-100">{title}</span>
            </div>
            <div className="flex gap-4">
              <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">Ikinyarwanda</div>
              <Link href="/logout" className="border-2 border-sky-500 py-1 px-2 rounded-sm flex gap-1">
                <span>Gusohoka</span>
                <FiLogOut color="white"/>
              </Link>
            </div>
        </div>
    )
}