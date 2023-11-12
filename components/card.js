import Image from "next/image";
import { FaPlay } from "react-icons/fa"

export default function Card(){
    return (
        <div className="border border-gray-300 flex flex-col">
            <div className="bg-green-400 w-fit text-sm text-green-900 rounded-sm">1 / 42</div>
            <span className="text-center py-12 text-blue-900 text-sm font-medium px-2">Imiterere y&apos ibyapa bibuza cyangwa bitegeka</span>
            <div className="flex gap-4 items-center p-2">
                <FaPlay color="green" className="w-3 h-3"/>
                <span className="text-sm font-medium text-gray-800">Bimeze nk&apos ingasire izengurutswe n&apos ibara ritukura kandi ubuso bukera</span>
            </div>
            <div className="bg-red-200 p-2 text-center text-gray-700 hover:bg-red-300 cursor-pointer">Inyuma</div>
            <div className="bg-green-200 p-2 text-center text-gray-700 hover:bg-green-300 cursor-pointer">Imbere</div>
        </div>
    )
}