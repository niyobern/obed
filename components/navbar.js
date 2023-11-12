import Image from "next/image"
export default function NavBar({title}){
    return (
        <div className="bg-indigo-950 flex px-2 md:px-24 lg:px-32 xl:px-48 py-2 justify-between text-white top-0">
            <div className="flex gap-1 text-white items-center">
                <div className="flex gap-1">
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
              <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">Gusohoka</div>
            </div>
        </div>
    )
}