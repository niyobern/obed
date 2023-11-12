import Image from "next/image"
import { useState } from "react"
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io"

export default function TestCard({ question, answer, back, index, total, slug }){
    const [choice, setChoice] = useState(-1)
    return (
        <div className="bg-white rounded w-full md:w-11/12 h-5/6 lg:w-2/3 flex flex-col overflow-auto">
            <div className="flex flex-col gap-2 p-2 md:p-12 lg:px-20 md:pt-4">
                <h1 className="font-bold text-lg text-center text-gray-800 pb-8">Isuzumabumenyi</h1>
                <div className="border border-gray-200 rounded relative">
                    <span className="absolute bg-green-400 p-1 rounded text-sm">{index + 1} / {total}</span>
                    <div className="flex items-center justify-center p-12">
                        <h2 className="font-medium text-gray-800">{question.question}</h2>
                    </div>
                    {question.image &&  <div className="flex flex-col items-center">
                      <Image
                        alt="Question Image"
                        src={`/images/tests/${slug}/${Number(question.image.slice(0,-3) - 1)}.${question.image.slice(-3)}`}
                        width={500}
                        height={500}
                        className="h-48 w-fit"
                        loader={(src) => src.src}
                      />
                    </div>}
                </div>
                <div className="flex flex-col">
                    {(question.answers[0].slice(-3) !== "png" && question.answers[0].slice(-3) !== "gpg") && question.answers.map((item, index) => 
                    <div key={index} onClick={() => setChoice(choice === index ? -1 : index)} className="cursor-pointer flex items-center gap-4 border-x border-gray-200 p-2 py-3 border-b-2 border-b-blue-600">
                        {choice !== index && <IoMdRadioButtonOff/>}
                        {choice === index && <IoMdRadioButtonOn color="blue"/>}
                        <span>{item}</span>
                    </div>
                    )}
                    {(question.answers[0].slice(-3) === "png" || question.answers[0].slice(-3) === "gpg") && <div className="flex justify-center hover:bg-blue-200 border-x border-gray-200 p-2 py-1 border-b-2 border-b-blue-600" onClick={() => setChoice(choice === 0 ? -1 : 0)}>
                      <Image
                        alt="Question Image"
                        src="/images/Kinya-thumb.png"
                        width={500}
                        height={500}
                        className="h-48 w-fit"
                      />
                    </div> }
                </div>
                <div className="flex justify-between py-4">
                    <div onClick={() => index > 0 && back()} className="text-center text-white rounded p-1 font-medium bg-blue-600 w-3/12 cursor-pointer">Inyuma</div>
                    <div onClick={() => answer(choice)} className="cursor-pointer text-center text-white rounded p-1 font-medium bg-blue-600 w-3/12">{index < 19? "Imbere": "Reba amanota"}</div>
                </div>
            </div>
        </div>
    )
}