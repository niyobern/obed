import Image from "next/image";
import { AiOutlineMenu } from 'react-icons/ai';
export default function Hero({ loggedIn }){
    return (
        <div className="bg-indigo-950 w-full flex flex-col justify-between">
            <div className="flex justify-between md:w-2/3 mx-auto py-6">
                <div className="flex gap-2">
                    <Image
                      src="/images/logo.jpg"
                      alt="Logo"
                      className="h-10 w-10 rounded-full"
                      width={40}
                      height={40}
                      priority
                    />
                    <h1 className="text-white text-center self-center text-xl font-bold">JIPROVISIONAL</h1>
                </div>
                <div className="hidden md:flex gap-4 text-white items-center">
                    <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">{loggedIn ? "Jya aho bigira": "Iyandikishe"}</div>
                    <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">{loggedIn ? "Sohoka": "Injira"}</div>
                    <div className="border-2 border-sky-500 py-1 px-2 rounded-sm">Ikinyarwanda</div>
                </div>
                <AiOutlineMenu color="white" className="h-6 w-6 flex sm:hidden"/>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 md:w-7/12 mx-auto py-24">
                <div className="flex flex-col gap-8">
                    <p className="text-white font-bold text-2xl">{loggedIn ? "Igihe cyageze ngo ukomeze wige. Twagiye!": "Uburyo bwa mbere bworoshye bwo kwigira provisoire mu Rwanda!"}</p>
                    <div className="flex gap-2">
                        <div className="bg-sky-300 py-1 px-2 rounded-sm">{loggedIn ? "Jya aho bigira": "Fungura Konti"}</div>
                        {!loggedIn && <div className="bg-sky-300 py-1 px-2 rounded-sm">Inira muri konti</div>}
                    </div>
                </div>
                <Image
                  src="/images/man-on-comp.png"
                  alt="Man on comp"
                  width={600}
                  height={400}
                  className="h-12 w-fit"
                />
            </div>
        </div>
    )
}