import Image from "next/image"
import { useState } from "react"
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai"

export default function AnswerCard({ question, answer, back, index, total, slug }){
    const [choice, setChoice] = useState(-1)
    return (
        <div className="bg-white rounded w-full h-fit flex flex-col">
            <div className="flex flex-col gap-2 p-2 md:pt-4">
                <div className="border border-gray-200 rounded relative">
                    <span className="absolute p-1 rounded text-xs font-medium">IKIBAZO 2</span>
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
                   <div className="bg-red-200 cursor-pointer flex items-center gap-4 border-x border-gray-200 p-2 py-3 border-b-2 border-b-blue-600">
                        <AiFillCloseCircle color="red" size={30}/>
                        <span>{question.answers[0]}</span>
                    </div>
                    {(question.answers[0].slice(-3) !== "png" && question.answers[0].slice(-3) !== "gpg") && question.answers.map((item, index) => 
                    <div key={index} className="cursor-pointer flex items-center gap-4 border-x border-gray-200 p-2 py-3 border-b-2 border-b-blue-600">
                        {index === 2 && <AiFillCheckCircle color="green" size={30}/>}
                        {index !== 2 && <AiFillCheckCircle color="white" size={30}/>}
                        <span>{item}</span>
                    </div>
                    )}
                    {/* {(question.answers[0].slice(-3) !== "png" || question.answers[0].slice(-3) !== "gpg") && <div className="flex justify-center hover:bg-blue-200 border-x border-gray-200 p-2 py-1 border-b-2 border-b-blue-600" onClick={() => setChoice(choice === 0 ? -1 : 0)}>
                      <Image
                        alt="Question Image"
                        src="/images/Kinya-thumb.png"
                        width={500}
                        height={500}
                        className="h-48 w-fit"
                      />
                    </div> } */}
                </div>
            </div>
        </div>
    )
}