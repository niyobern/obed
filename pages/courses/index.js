import Image from "next/image";
import logo from "../../public/images/Kinya-thumb.png"
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps() {
    const title = "Amasomo mfata"
    const right = { 
        contents: [{ 
            lesson: "Igice cya 1: Ubusobanuro",
            contents: ["Ibisobanuro by'amagambo", "Ibisobanuro by'amagambo", "Ibisobanuro by'amagambo"]
        }] 
    } 
    return { props: { right, title } }
  }
export default function Courses(){
    const router = useRouter()
    const [lastNote, setLastNote] = useState("/1")
    return (
        <div className="flex flex-col h-full w-full md:w-1/3 gap-2">
            <div onClick={() => router.push(`/courses/${lastNote}`)} className="cursor-pointer hover:shadow hover:shadow-sky-200 h-1/2 border border-gray-300">
                <div className="pb-2 h-1/2">
                    <div className="h-full relative w-full">
                        <Image
                        src={logo}
                        alt="Thumbnail"
                        fill
                        />
                    </div>
                </div>
                <span className="text-sm font-medium px-2">Isomo RYUZUYE ryo kwitegura ikizamini cy&apos;uruhushya rw&apos;agateganyo</span>
                <div className="px-2 pt-2">
                    <div className="flex gap-2 py-2">
                        <div className="border border-gray-300 w-full h-3 rounded">
                            <div className="w-1/12 bg-green-400 h-full"></div>
                        </div>
                        <div className="h-3 w-3 w-fit">
                            <svg className="h-full w-full text-orange-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="medal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"></path></svg>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 py-2">
                        <svg className="h-2 w-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                        <span className="uppercase text-xs font-medium">Tangira</span>
                    </div>
                </div>
            </div>
        </div>
    )
}