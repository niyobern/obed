import Link from "next/link"
export default function Content({lesson, contents, focused, focus, contentIndex, check, selected }){
    return (
        <div className="flex flex-col">
            <div className="border-b-2 border-gray-300 p-3">
            <h1 onClick={() => focus(contentIndex)} className='font-semibold'>{lesson}</h1>
            </div>
            <div className='flex flex-col p-3 gap-4'>
            {focused && contents.map((item, index) => (
                <div key={index}>
                    <div className='flex gap-4 items-center'>
                        <input type='checkbox' checked={selected.findIndex((value) => value === `${contentIndex}/${index}`) >= 0 ? true : false} onChange={() => check(`${contentIndex}/${index}`)}/>
                        <Link href={`/courses/${contentIndex}/${index}`} className='text-sm font-medium leading-none'>{item}</Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}