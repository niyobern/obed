import NavBar from "./navbar";
import Image from "next/image";

export default function Hero(){
    return (
        <div className="bg-cyan-900 h-screen text-white">
            <div className="invisible"><NavBar/></div>
            <div className=" flex flex-col md:grid grid-cols-4">
                <div className="col-span-2 flex flex-col w-full px-20 py-8">
                    <div className="text-5xl font-medium leading-relaxed">Join the <span className="text-green-600">Restore Health Initiative</span> <br/> for your <br/> <span className="text-amber-400">Vitality</span></div>
                    <div className="text-sm">Empowering Health and wellness through providing accessible community based interventions</div>
                    <div className="p-2 px-4 w-fit my-4 md:mt-6 lg:mt-8 rounded-l-full rounded-r-full bg-orange-600">Become a Member</div>
                </div>
                <div className="col-span-2 hidden:md:flex flex-col bg-transparent">
                    <Image src="/images/bg.png" alt="Image" width={600} height={600} className="bg-transparent"/>
                </div>
            </div>
        </div>
    )
}
