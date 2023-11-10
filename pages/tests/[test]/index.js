import TestCard from "@/components/test/testcard";
import TestIntro from "@/components/test/testintro";
import path from "path";
import { useEffect, useState } from "react"
import { readFile } from 'fs/promises';
import {  useRouter } from 'next/router'

export const getStaticPaths = (async () => {
    const links = ["/tests/0"]
    for (let i=1;i<20;i++){
        links.push(`/tests/${i}`)
    }
    return {
      paths: [...links],
      fallback: false,
    }
})
export const getStaticProps = (async (context) => {
    const dir = path.join(process.cwd(), 'data')
    const slug = Number(context.params.test)
    const rawLessons = await readFile(dir + "/lessons.json", {encoding: "utf-8"})
    const lessons = JSON.parse(rawLessons)
    const rawQuestions = await readFile(dir + `/tests/${slug}.json`, {encoding: "utf-8"})
    const questions = JSON.parse(rawQuestions)
    const links = {left: [{text: "", link: ""}], right: [{text: "", link: ""}]}
    lessons.forEach((item) => links.left.push({text: item.title, link: `/class/1/${item.key}`}))
    lessons.forEach((item) => links.right.push({text: item.title, link: `/class/1/${item.key}`}))
    links.left.shift()
    links.right.shift()
    return { props: { links: links, questions: questions, slug } }
})

export default function Test({ questions }){
    const [modal, setModal] = useState(false)
    const [answers, setAnswers] = useState([])
    const [index, setIndex] = useState(0)
    const router = useRouter()
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const c = shuffleArray(questions)
    function handleAnswer(number){
        const item = {...questions[number], "index": -1}
        const answersCopy = [...answers]
        const cleanAnswers = answersCopy.filter( (value) => {
            return value.index !== index
        })
        item["index"] = index
        if (index < 19){
            setIndex(index +1)
        } else {
            router.replace("/home")
        }
        setAnswers(cleanAnswers.concat([item]))
    }
    if (modal){
        return (
            <div className="z-50 fixed top-0 left-0 bg-gray-900 bg-opacity-50 w-screen h-screen flex items-center justify-center">
                <TestCard question={questions[index]} answer={handleAnswer} back={() => setIndex(index-1)} index={index} total={questions.length}/>
            </div>
        )
    }
    return (
        <div>
            <TestIntro start={() => setModal(true)}/>
        </div>
    )
}