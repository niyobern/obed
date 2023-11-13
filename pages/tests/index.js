import TestGrid from "/components/test/testgrid";
import TestBanner from "/components/test/testbanner";
import { useState } from "react";

export default function Tests(){
    const [focused, setFocused] = useState(0)
    const [modal, setModal] = useState(-1)
    const tests = Array.from(Array(20).keys())
    if (modal >= 0){
        return (
            <div className="z-50 fixed top-0 left-0 bg-gray-900 bg-opacity-50 w-screen h-screen flex items-center justify-center">
                <TestBanner close={() => setModal(0)} id={modal} length={20}/>
            </div>
        )
    } else {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-evenly text-center items-center font-medium">
                <span onClick={() => setFocused(0)} className={`pb-4 w-full border-b-2 cursor-pointer ${focused === 0 ? "border-black": "border-gray-300"}`}>Isuzuma rishya</span>
                <span onClick={() => setFocused(1)} className={`pb-4 w-full border-b-2 cursor-pointer ${focused === 1 ? "border-black": "border-gray-300"}`}>Ayo nakoze</span>
            </div>
            <div className="py-8 px-4 grid grid-cols-2 gap-2">
                {tests.map( (item, index) => <TestGrid number={item} key={index} choose={(num) => setModal(num)}/>)}
            </div>
        </div>
    )
    }
}