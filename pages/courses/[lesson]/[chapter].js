import { useState, useEffect } from "react";
import Card from "/components/card";
import Incamake from "/components/incamake";
import { BsCheckCircleFill } from "react-icons/bs"
import { readFile } from 'fs/promises';
import { useRouter } from "next/router";
import path from "path";
import axios from "axios";

export const getStaticPaths = (async () => {
    const links = []
    const dir = path.join(process.cwd(), 'data')
    const rawChapters = await readFile(dir + `/lesson_contents.json`, {encoding: "utf-8"})
    const rawLessons = await readFile(dir + `/lessons.json`, {encoding: "utf-8"})
    const chapters = JSON.parse(rawChapters)
    const lessons = JSON.parse(rawLessons)
    lessons.forEach(element => {
        const contents = chapters[element.key]
        contents.forEach( item => links.push({params : { lesson: element.key, chapter: item.key}}))
    });
    return {
      paths: [...links],
      fallback: false,
    }
})
export const getStaticProps = (async (context) => {
    const dir = path.join(process.cwd(), 'data')
    const lesson = context.params.lesson
    const chapter = context.params.chapter
    const rawNotes = await readFile(dir + `/lesson_chapters.json`, {encoding: "utf-8"})
    const rawChapters = await readFile(dir + `/lesson_contents.json`, {encoding: "utf-8"})
    const rawLessons = await readFile(dir + `/lessons.json`, {encoding: "utf-8"})
    const allNotes = JSON.parse(rawNotes)
    const chapters = JSON.parse(rawChapters)
    const lessons = JSON.parse(rawLessons)
    const notes = allNotes[lesson][chapter]
    const contents = []
    const chapterTitle = chapters[lesson][chapter]
    lessons.forEach(less => {
        const chap_contents = chapters[less.key].map(cont => cont.item)
        contents.push({lesson: less.title, contents: chap_contents})
    })
    const sideLinks = {contents: contents}
    return { props: { notes: notes, slug: `${lesson}/${chapter}`, right: sideLinks, title: chapterTitle } }
})

export default function Study( { notes, slug, title }){
    const [focused, setFocused] = useState(0)
    const [index, setIndex] = useState(0)
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token")
        const progress = slug + "/" + String(notes.length)
        axios.post(`https://nvb_backend-1-z3745144.deta.app/study/note?proogress=${progress}`, {}, { headers: { "Authorization": token}})
        .then((res) => console.log(res.data))
        .catch((err) => router.replace("/home"))
    })
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-evenly text-center items-center font-medium">
                <span onClick={() => setFocused(0)} className={`pb-4 w-full border-b-2 cursor-pointer ${focused === 0 ? "border-black": "border-gray-300"}`}>Incamake</span>
                <span onClick={() => setFocused(1)} className={`pb-4 w-full border-b-2 cursor-pointer ${focused === 1 ? "border-black": "border-gray-300"}`}>Amakarita yo kwiga</span>
                <span onClick={() => setFocused(2)} className={`pb-4 w-full border-b-2 cursor-pointer ${focused === 2 ? "border-black": "border-gray-300"}`}>Imyitozo</span>
            </div>
            <div className="py-8 px-4">
                {focused === 0 && <Incamake id={slug} title={title}/>}
                {focused === 1 && <Card note={notes[index]} length={notes.length} number={index} nav={(num) => setIndex(num)}/>}
                {focused === 2 && (
                    <div className="border border-gray-200 border-l-8 border-l-black rounded p-2 w-fit">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col pr-6 md:pr-8">
                              <span className="text-sm font-medium">Imyitozo 1</span>
                              <span className="text-xs font-medium">Ibibazo birimo</span>
                            </div>
                            <BsCheckCircleFill color="green"/>
                            <div className="h-fit w-fit bg-blue-600 hover:bg-blue-700 px-2 py-1 text-xs text-white rounded cursor-pointer">Tangira</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}