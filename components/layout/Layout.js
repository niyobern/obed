import NavBar from "./navbar"
import Head from "next/head"
import LeftSide from "./sidebar"
import Right from "./sideRight"
import { useRouter } from "next/router"
import AppBar from "./appbar"
import Footer from "./footer"
import BottomNavBar from "./bnavbar"

export default  function Layout( { children, right, title } ){
    const router = useRouter()
    const route = router.pathname
    const routeParts =  route.split("/")
    const pageName = routeParts[routeParts.length-1]
    if (route === "/" || route === "/login" || route === "/register" || route === "/password" || route === "/name" || route === "/verifyPhone"){
        return (
        <div className="relative flex flex-col gap-4 w-full h-screen">
        { children }
        <div className="static bottom-0 w-full"><Footer/></div>
        </div>
        )
    }
    return (
        <div className="relative">
            <Head>
                <title>{`Jiprovisional | ${pageName.toUpperCase()}`}</title>
                <link rel="shortcut icon" href="../images/logo.jpg" className="rounded-full"/>
            </Head>
            <div className="fixed hidden md:block z-10 w-screen"><NavBar title={title}/></div>
            <div className="sticky hidden md:block w-full invisible"><NavBar title={title}/></div>
            <div className="fixed w-full top-0 z-10 md:hidden"><AppBar/></div>
            <div className="sticky w-full z-0 md:hidden invisible"><AppBar/></div>
            <div className="flex flex-col md:grid grid-cols-4 divide-x divide-solid divide-gray-300 min-h-screen">
                <div className="col-span-1">
                    {/* <LeftSide/> */}
                </div>
                <div className="hidden md:flex col-span-1 fixed">
                    <LeftSide/>
                </div>
                <div className="col-span-2 flex flex-col p-2 gap-4 md:gap-8 pb-8">
                    { children }
                </div>
                <div className="col-span-1">
                  {right && <Right tests={right.tests} cards={right.cards} contents={right.contents}/>}
                </div>
            </div>
            <div className="static bottom-0 w-full"><Footer/></div>
            <div className="md:hidden"><BottomNavBar/></div>
        </div>
    )
}