import NavBar from "./navbar"
import { useRouter } from "next/router"

export default function Layout({ children}){
    const router = useRouter()
    if (router.pathname === "/join" || router.pathname === "/members" || router.pathname === "/email" || typeof router.query.code !== "undefined"){
        return <div>{children}</div>
    }
    return (
        <div className="flex flex-col pt-0 md:pt-8 bg-transparent w-full relative overfolw-hidden">
            <div className="w-full z-10"><NavBar/></div>
            <div>{children}</div>
        </div>
    )
}