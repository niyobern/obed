import AnswerCard from "@/components/test/answercard";
import TestOutro from "@/components/test/testOutro";
import path from "path";
import { readFile } from 'fs/promises';
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const getServerSideProps = (async (context) => {
    const dir = path.join(process.cwd(), 'data')
    const slug = Number(context.params.test)
    const rawQuestions = await readFile(dir + `/tests/${slug}.json`, {encoding: "utf-8"})
    const questions = JSON.parse(rawQuestions)
    const shufledQuestions = shuffleArray(questions)
    return { props: { questions: shufledQuestions, slug: slug } }
})

export default function ReviewTest({ questions, slug }){
    const [answers, setAnswers] = useState(null)
    const [score, setScore] = useState(null)
    const [lastDay, setLastDay] = useState(null)
    const [lastTime, setLastTime] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const rawResults = localStorage.getItem(`test_${slug}`)
        const rawScore = localStorage.getItem(`testScore_${slug}`)

        const token = localStorage.getItem("token")
        axios.get(`https://nvb_backend-1-z3745144.deta.app/study/test/${slug}`, { headers : {"Authorization": token}})
        .then((res) => {
            console.log(res.data)
            setAnswers(res.data.answers)
            setScore(res.data.score)
            setLastDay(res.data.lastDay)
            setLastTime(res.data.lastTime)
        })
        .catch((err) => router.replace(`/tests/${slug}`))
        
    }, [router, slug])
    return (
        <div className="flex flex-col items-center">
            <TestOutro
              length={questions.length} 
              id={slug} 
              score={score}
              lastDay={lastDay}
              lastTime={lastTime}
            />
            {score > 11 && <svg className="pt-0 mt-0 w-1/2 h-full" id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m316 0h-150-30l-120 120v301h150 150z" fill="#edf5ff"/><g fill="#d5e8fe"><path d="m166 0h150v421h-150z"/><path d="m76 180h90 60v-30h-60-90z"/><path d="m226 210h-60-90v30h90 60z"/><path d="m226 270h-60-90v30h90 60z"/><path d="m226 330h-60-90v30h90 60z"/></g><path d="m166 150h60v30h-60z" fill="#b5dbff"/><path d="m166 210h60v30h-60z" fill="#b5dbff"/><path d="m166 270h60v30h-60z" fill="#b5dbff"/><path d="m166 330h60v30h-60z" fill="#b5dbff"/><path d="m136 120v-120h-21.211l-98.789 98.789v21.211z" fill="#d5e8fe"/><path d="m376 330c-8.291 0-15 6.709-15 15v167h30v-167c0-8.291-6.709-15-15-15z" fill="#47568c"/><path d="m376 512h15v-167c0-8.291-6.709-15-15-15z" fill="#29376d"/><circle cx="376" cy="240" fill="#6be62e" r="120"/><path d="m496 240c0-66.275-53.725-120-120-120v240c66.275 0 120-53.725 120-120z" fill="#44cc29"/><path d="m421 188.789-45 45-15 15-30-30-21.211 21.211 51.211 51.211 15-15 66.211-66.211z" fill="#edf5ff"/><path d="m421 188.789-45 45v42.422l66.211-66.211z" fill="#d5e8fe"/></g></svg> }
            {score < 12 && <svg className="pt-0 mt-0 w-1/2 h-full" id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m58.064 0h-58.064v512h202.227l30.21-154.048-30.21-299.267z" fill="#7d89e5"/><path d="m346.337 0-143.053 59.115-1.057-.43v453.315h187.429v-30.064l14.797-169.922v-312.014z" fill="#706bef"/></g><path d="m57.432 0v449.231h144.795l33.136-227.022-33.136-222.209z" fill="#edf6ff"/><path d="m202.227 0v449.231h112.352l32.442-116.456v-332.775z" fill="#d7e9fe"/><g><path d="m138.928 0v64.29h63.299l21.432-34.301-21.432-29.989z" fill="#ffea80"/><g fill="#d7e9fe"><path d="m162.982 117.242v30.065h39.245l17.53-13.281-17.53-16.784z"/><path d="m162.982 207.174h39.245l19.481-14.69-19.481-15.374h-39.245z"/><path d="m162.982 267.042h39.245l16.555-14.117-16.555-15.947h-39.245z"/><path d="m162.982 326.91h39.245l16.555-13.545-16.555-16.52h-39.245z"/></g></g><g><g><path d="m101.648 117.242h29.265v30.064h-29.265z" fill="#f33"/></g></g><g><g><path d="m101.648 177.11h29.265v30.064h-29.265z" fill="#f33"/></g></g><g><g><path d="m101.648 236.978h29.265v30.064h-29.265z" fill="#f33"/></g></g><g><g><path d="m101.648 296.845h29.265v30.064h-29.265z" fill="#bee569"/></g></g><g fill="#bfdaf3"><path d="m202.227 117.242h93.953v30.064h-93.953z"/><path d="m202.227 177.11h93.953v30.064h-93.953z"/><path d="m202.227 236.978h93.953v30.064h-93.953z"/><path d="m202.227 296.845h93.953v30.064h-93.953z"/></g><path d="m202.227 0h63.299v64.29h-63.299z" fill="#fc6"/></g><g><g><path d="m296.98 404.491c0 59.28 48.229 107.509 107.51 107.509l18.252-109.461-18.252-105.558c-59.281 0-107.51 48.229-107.51 107.51z" fill="#f33"/></g></g><path d="m404.49 296.981v215.019c59.282 0 107.51-48.229 107.51-107.509 0-59.281-48.228-107.51-107.51-107.51z" fill="#e62e2e"/><g><path d="m383.378 362.12-21.259 21.258 21.113 21.113-21.113 21.113 21.259 21.258 21.112-21.112 10.326-19.248-10.326-23.269z" fill="#edf6ff"/></g><path d="m446.861 383.378-21.258-21.258-21.113 21.113v42.517l21.113 21.112 21.258-21.258-21.112-21.113z" fill="#d7e9fe"/></g></svg>}
            {answers && answers.map((qn, index) => <AnswerCard key={index} question={qn} slug={slug} number={index + 1}/>)}

        </div>
    )
}