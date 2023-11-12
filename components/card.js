import Image from "next/image";
import { FaPlay } from "react-icons/fa"

export default function Card({ length, number, note, nav}){
    const {title, points, image} = note
    return (
        <div className="border border-gray-300 flex flex-col">
            <div className="bg-green-400 w-fit text-sm text-green-900 rounded-sm">{number+1} / {length}</div>
            <span className="text-center py-12 text-blue-900 text-sm font-medium px-2">{title}</span>
            {image !== "" && (
              <div className="flex justify-center">
                <Image
                  src={`/images/notes/${image}`}
                  alt="Thumbnail"
                  width={500}
                  height={300}
                  loader={(src) => src.src}
                />
              </div>
            )}
            {points.map((item, index) => (
                <div key={index} className="flex gap-4 items-center p-2">
                    <FaPlay color="green" className="w-3 h-3 flex-none"/>
                    <span className="grow-0 text-sm font-medium text-gray-800">{item}</span>
                </div>
            ))}
            {number > 0 && <div onClick={() => nav(number-1)} className="bg-red-200 p-2 text-center text-gray-700 hover:bg-red-300 cursor-pointer">Inyuma</div>}
            {number < length-1 && <div onClick={() => nav(number+1)} className="bg-green-200 p-2 text-center text-gray-700 hover:bg-green-300 cursor-pointer">Imbere</div>}
        </div>
    )
}