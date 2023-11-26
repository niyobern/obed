import NavBar from "./navbar"
import { useRouter } from "next/router"

export default function Layout({ children}){
    const router = useRouter()
    if (router.pathname === "/join"){
        return <div>{children}</div>
    }
    return (
        <div className="flex flex-col pt-0 md:pt-8 bg-transparent w-full relative">
            <div className="w-full z-10"><NavBar/></div>
            <div>{children}</div>
        </div>
    )
}