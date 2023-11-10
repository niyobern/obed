import Image from "next/image";
export default function Header(){
    return (
        <div className="flex flex-col gap-4 relative">
            <div className="w-full h-40 relative">
                <Image
                    src="/images/header-slide.png"
                    alt="Header slide"
                    fill
                />
            </div>
            <div className="grid grid-cols-2 md:flex bg-gray-100">
                <div className="flex flex-col items-center text-center w-full md:w-full hover:bg-gray-200 py-4">
                    <Image
                        src="/images/resume.svg"
                        alt="Header slide"
                        width={40}
                        height={40}
                    />
                    <span className="text-lg font-medium">Subukura</span>
                    <span className="uppercase text-sm">Kwiga</span>
                </div>
                <div className="flex flex-col items-center text-center w-full md:w-full hover:bg-gray-200 py-4">
                    <Image
                        src="/images/course.svg"
                        alt="Header slide"
                        width={40}
                        height={40}
                    />
                    <span className="text-lg font-medium">Amasomo</span>
                    <span className="uppercase text-sm">yange</span>
                </div>
                <div className="flex flex-col items-center text-center w-full md:w-full hover:bg-gray-200 py-4">
                    <Image
                        src="/images/test.svg"
                        alt="Header slide"
                        width={40}
                        height={40}
                    />
                    <span className="text-lg font-medium">Isuzuma</span>
                    <span className="uppercase text-sm">bumenyi</span>
                </div>
                <div className="flex flex-col items-center text-center w-full md:w-full hover:bg-gray-200 py-4">
                    <Image
                        src="/images/wallet.svg"
                        alt="Header slide"
                        width={40}
                        height={40}
                    />
                    <span className="text-lg font-medium">Ikofi</span>
                    <span className="uppercase text-sm">ayo nsigaranye</span>
                </div>
            </div>
        </div>
    )
}