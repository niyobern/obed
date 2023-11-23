import NavBar from "./navbar"

export default function Layout({ children}){
    return (
        <div className="flex flex-col pt-0 md:pt-8 bg-transparent w-full relative">
            <div className="w-full z-10"><NavBar/></div>
            <div>{children}</div>
        </div>
    )
}