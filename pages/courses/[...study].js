import { useState } from "react";
import Card from "/components/card";
import Incamake from "/components/incamake";
import { BsCheckCircleFill } from "react-icons/bs"

export async function getServerSideProps() {
    const title = "Isomo RYUZUYE ryo kwitegura ikizamini cy'uruhushya rw'agateganyo"
    const right = { 
        contents: [{ 
            lesson: "Igice cya 1: Ubusobanuro",
            contents: ["Ibisobanuro by'amagambo", "Ibisobanuro by'amagambo", "Ibisobanuro by'amagambo"]
        }] 
    } 
    return { props: { right, title } }
  }
export default function Study(){
    const [focused, setFocused] = useState(0)
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-evenly text-center items-center font-medium">
                <span onClick={() => setFocused(0)} className={`pb-4 w-full border-b-2 cursor-pointer ${focused === 0 ? "border-black": "border-gray-300"}`}>Incamake</span>
                <span onClick={() => setFocused(1)} className={`pb-4 w-full border-b-2 cursor-pointer ${focused === 1 ? "border-black": "border-gray-300"}`}>Amakarita yo kwiga</span>
                <span onClick={() => setFocused(2)} className={`pb-4 w-full border-b-2 cursor-pointer ${focused === 2 ? "border-black": "border-gray-300"}`}>Imyitozo</span>
            </div>
            <div className="py-8 px-4">
                {focused === 0 && <Incamake/>}
                {focused === 1 && <Card/>}
                {focused === 2 && (
                    <div className="border border-gray-200 border-l-8 border-l-black rounded p-2 w-fit">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col pr-6 md:pr-8">
                              <span className="text-sm font-medium">Imyitozo 1</span>
                              <span className="text-xs font-medium">Ibibazo birimo</span>
                            </div>
                            <BsCheckCircleFill color="green"/>
                            <div className="h-fit w-fit bg-blue-600 px-2 py-1 text-xs text-white rounded cursor-pointer">Tangira</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}