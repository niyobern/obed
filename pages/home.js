import NavBar from "/components/navbar";
import Head from "next/head";
import LeftSide from "/components/sidebar";
import Header from "/components/header";
import Tangira from "/components/tangira";
import TestGrid from "/components/test/testgrid";


export default function Home(){
    const tests = ["011", "009", "017", "016", "001", "0019"]
    return (
        <>
            <Header/>
            <Tangira/>
            <span className="pl-2 font-medium border-l-4 border-blue-500">Amasuzuma akunzwe</span>
            <div className="flex flex-col md:grid grid-cols-2 gap-2">
            {tests.map((item, index) => <TestGrid key={index} number={item}/>)}
            </div>
        </>
    )
}