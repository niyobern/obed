import Image from "next/image";
import { useRouter } from "next/router";
export default function TestGrid( { number, label } ){
  const router = useRouter()
    return (
            <div onClick={() => router.push(`/courses/${number}`)} className="grid grid-cols-7 w-full gap-2 border border-gray-300">
                <div className="h-full col-span-3 w-full relative">
                    <Image
                      src="/images/Kinya-thumb.png"
                      alt="Thumbnail"
                      fill
                      className="h-fit w-full"
                    />
                </div>
                <div className="flex flex-col p-2 col-span-4 gap-2">
                  <p className="font-medium text-xs leading-none">Isuzuma #K{number}: riteguye nk&apos;ikizamini cy&apos;uruhushya rw&apos;agateganyo rwa Polisi.</p>
                  <div className="flex items-center gap-1">
                    <svg className="h-2 w-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                    <span className="uppercase text-xs">{label}</span>
                  </div>
                </div>
            </div>
    )
}