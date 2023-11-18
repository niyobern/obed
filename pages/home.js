import Header from "/components/header";
import Tangira from "/components/tangira";
import TestGrid from "/components/test/testgrid";


export default function Home(){
    const tests = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <Header/>
            <Tangira/>
            <span className="pl-2 font-medium border-l-4 border-blue-500">Amasuzuma akunzwe</span>
            <div className="flex flex-col mx-auto max-w-sm lg:max-w-xl lg:grid grid-cols-2 gap-2">
            {tests.map((item, index) => <TestGrid key={index} number={item}/>)}
            </div>
        </>
    )
}