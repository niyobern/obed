import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return (
        <div className="flex flex-col gap-4 relative">
            <div className="w-full h-24 sm:h-32 md:h-40 relative">
                <Image
                    src="/images/header-slide.png"
                    alt="Header slide"
                    fill
                />
            </div>
            <div className="grid grid-cols-2 lg:flex bg-gray-100">
                <Link href="/courses" className="flex flex-col items-center text-center w-full md:w-full hover:bg-gray-200 py-4 cursor-pointer">
                    <Image
                        src="/images/resume.svg"
                        alt="Header slide"
                        width={40}
                        height={40}
                    />
                    <span className="text-lg font-medium">Subukura</span>
                    <span className="uppercase text-sm">Kwiga</span>
                </Link>
                <Link href="/courses" className="flex flex-col items-center text-center w-full md:w-full hover:bg-gray-200 py-4 cursor-pointer">
                    <Image
                        src="/images/course.svg"
                        alt="Header slide"
                        width={40}
                        height={40}
                    />
                    <span className="text-lg font-medium">Amasomo</span>
                    <span className="uppercase text-sm">yange</span>
                </Link>
                <Link href="/tests" className="flex flex-col items-center text-center w-full md:w-full hover:bg-gray-200 py-4 cursor-pointer">
                    <Image
                        src="/images/test.svg"
                        alt="Header slide"
                        width={40}
                        height={40}
                    />
                    <span className="text-lg font-medium">Isuzuma</span>
                    <span className="uppercase text-sm">bumenyi</span>
                </Link>
                <Link href="/ikofi" className="flex flex-col items-center text-center w-full md:w-full hover:bg-gray-200 py-4 cursor-pointer">
                    <Image
                        src="/images/wallet.svg"
                        alt="Header slide"
                        width={40}
                        height={40}
                    />
                    <span className="text-lg font-medium">Ikofi</span>
                    <span className="uppercase text-sm">ayo nsigaranye</span>
                </Link>
            </div>
        </div>
    )
}