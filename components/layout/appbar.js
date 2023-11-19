import Image from "next/image"
import logo from "../../public/images/logo.png"
import "node_modules/flag-icons/css/flag-icons.min.css"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Right from "./sideRight"
import { AiOutlineMenu } from "react-icons/ai"

export default function AppBar({ contents }){
  const router = useRouter()
  const language = "rw"
    const [lang, setLang] = useState(language)

    useEffect(() => {
      if (!language){
        setLang(window.localStorage.getItem("lang") || "rw")
      } else {
        window.localStorage.setItem("lang", language)
      }
    }, [language])

    function changeLang(){
      console.log("clicked")
    }

    return (<div className="mb-0 flex flex-row md:hidden items-center justify-between sticky z-50 order-first top-0 w-full bg-blue-950 shadow rounded-b">
        <div className="px-1 flex md:hidden justify-between h-10 items-center w-full">
            {/* <div onClick={changeLang} className="group flex gap-2 rounded">
              <span className="hidden text-white group-hover:flex">{lang == "gb" ? "English" : "Kinyarwanda"}</span>
              <span className={`fi fi-${lang} text-2xl`}/>
            </div> */}
                {contents && (
                  <div className="group">
                    <AiOutlineMenu color="white" className="h-8 w-8 flex md:hidden"/>
                    <div className="flex-row-reverse absolute top-0 left-0 z-50">
                        <div className="w-fit hidden group-hover:flex max-h-[90vh] bg-white shadow shadow-blue-950 z-50">
                            <Right contents={contents}/>
                        </div>
                    </div>
                </div>
                )}
            <Link href="/"><Image src={logo} alt="image" width={500} height={500} className="h-8 w-8"/></Link>
            <Link href="/" passHref={true}><span className="text-xl font-bold text-white leading-none antialiased uppercase">Jiprovisional</span></Link>
            <Link passHref={true} href="/konti" className="border-2 hover:border-none border-white rounded-full group flex relative justify-center self-center hover:self-end items-center">
              <div className="hidden group-hover:flex font-bold text-white py-1">Konti Yanjye</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white"><path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" /></svg>
            </Link>
        </div>
    </div>
    )
}