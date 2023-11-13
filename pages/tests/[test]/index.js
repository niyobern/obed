import TestCard from "@/components/test/testcard";
import TestIntro from "@/components/test/testintro";
import path from "path";
import { useEffect, useState } from "react"
import { readFile } from 'fs/promises';
import {  useRouter } from 'next/router'
import axios from "axios";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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
    const rawQuestions = await readFile(dir + `/tests/${slug}.json`, {encoding: "utf-8"})
    const questions = JSON.parse(rawQuestions)
    const shufledQuestions = shuffleArray(questions)
    return { props: { questions: shufledQuestions, slug: slug } }
})

export default function Test({ questions, slug }){
    const [modal, setModal] = useState(false)
    const [answers, setAnswers] = useState([])
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const [lastDay, setLastDay] = useState(null)
    const [lastTime, setLastTime] = useState(null)
    const [lastScore, setLastScore] = useState(null)
    const [score, setScore] = useState()

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get(`https://nvb_backend-1-z3745144.deta.app/study/test/${slug}`, { headers: { "Authorization": token}})
        .then((res) => {
            setLastDay(res.data.lastDay)
            setLastTime(res.data.lastTime)
            setLastScore(res.data.score)
        })
    })
    function handleAnswer(number){
        const item = {...questions[index], "index": -1, "choice": number}
        const answersCopy = [...answers]
        const cleanAnswers = answersCopy.filter( (value) => {
            return value.index !== index
        })
        item["index"] = index
        if (item.answer >= item.answers.length){
            item.choice = item.answers.length
        }
        if (index < 19){
            setIndex(index +1)
        } else {
            axios.post("https://nvb_backend-1-z3745144.deta.app/study/test", {"test_id": slug, "length": questions.length, "answers": cleanAnswers.concat([item])})
            .then( (response) => {
                localStorage.setItem(`test_${slug}`, JSON.stringify(response.data))
                localStorage.setItem(`testScore_${slug}`, JSON.stringify(score))
                router.replace(`/tests/${slug}/review`)
            })
        }
        if (item.answer === item.choice){
            setScore(score + 1)
        }
        setAnswers(cleanAnswers.concat([item]))
    }
    if (modal){
        return (
            <div className="z-50 fixed top-0 left-0 bg-gray-900 bg-opacity-50 w-screen h-screen flex items-center justify-center">
                <TestCard 
                  slug={slug} 
                  question={questions[index]} 
                  answer={handleAnswer} back={() => setIndex(index-1)} 
                  index={index} total={questions.length}
                />
            </div>
        )
    }
    return (
        <div>
            <TestIntro
              id={slug}
              start={() => setModal(true)}
              latestScore={lastScore}
              lastDay={lastDay}
              lastTime={lastTime}
              length={questions.length}
            />
        </div>
    )
}