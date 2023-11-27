import Image from "next/image"
import background from "../public/images/something.svg"

export default function VM(){

    return (<div className="flex flex-col md:flex-row items-center h-fit gap-6 relative py-12 md:py-24 px-2 md:px-20">
        {/* <Image src={background} alt="background" fill={true} className="opacity-50"/> */}
        <div className="bg-gray-600 bg-opacity-70 rounded w-full py-12 flex flex-col items-center relative z-20">
            <span className="text-white text-3xl font-bold uppercase">Mission</span>
            <p className="text-white text-xl text-center p-4 md:p-12" id="mission">Empowering Rwanda for healthier future, combating NCDs effectively</p>
        </div>
        <div className="bg-gray-600 bg-opacity-70 rounded w-full py-12 flex flex-col items-center z-20">
            <span className="text-white text-3xl font-bold uppercase">Vision</span>
            <p className="text-white text-xl text-center p-4 md:p-12" id="vision">Healthy Rwanda, NCDs free nation</p>
        </div>
    </div>
    )
}