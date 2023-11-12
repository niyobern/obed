import Image from "next/image";
import Link from "next/link";
export default function Tangira(){
    return (
        <div className="border border-gray-300 rounded-sm grid grid-cols-2 pl-10 xl:pl-16 items-center justify-start h-fit">
            <div className="w-fit col-span-1">
                <Image
                src="/images/logo-ur.png"
                alt="Logo UR"
                width={90}
                height={90}
                />
            </div>
            <Link href="/ikofi" className="hover:bg-gray-100 col-span-1 px-1 py-2 border-2 border-black w-fit rounded">Tangira</Link>
        </div>
    )
}