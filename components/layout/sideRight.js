import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Content from '../content';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Right({ contents, selected }){
  const [newContents, setNewContents] = useState(contents || [])
  const [checked, setChecked] = useState(selected || [])
  const router = useRouter()
  const [tests, setTests] = useState(0)
  const [cards, setCards] = useState(0)

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get("https://nvb_backend-1-z3745144.deta.app/users/details", { headers: {"Authorization": token}})
    .then((res) => {
      setTests(res.data.study.tests)
      setCards(res.data.study.cards)
    })
    axios.get("https://nvb_backend-1-z3745144.deta.app/study/check", { headers: {"Authorization": token}})
    .then((res) => setChecked(res.data))
  })
  function handleFocus(index){
    const contentsCopy = [...newContents]
    contentsCopy[index].focused = !contentsCopy[index]?.focused
    setNewContents(contentsCopy)
  }
  function handleCheck(slug){
    const checkedCopy = [...checked]
    const index = checkedCopy.findIndex((value) => value === slug)
    if (index >= 0){
      checkedCopy.splice(index, 1)
    } else { checkedCopy.push(slug) }
    setChecked(checkedCopy)
    const token = localStorage.getItem("token")
    axios.post('https://nvb_backend-1-z3745144.deta.app/study/check', {checked: checkedCopy}, {headers: {"Authorization": token}})
    .then((res) => console.log(res.data))
  }
  if (router.pathname === "/"){
    return  (
        <div className="flex flex-col p-8 gap-8">
            <div className="bg-sky-400 flex flex-col rounded w-3/4 items-center justify-evenly text-white py-4 gap-4">
              <svg className="h-12 w-12 text-sky-400 bg-white p-2 rounded-full" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="puzzle-piece" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"></path></svg>
              <span className="text-4xl font-bold">{tests}</span>
              <span>Imyitozo wakoze</span>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="h-6 w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
            </div>
            <div className="bg-blue-600 flex flex-col rounded w-3/4 items-center justify-evenly text-white py-4 gap-4">
              <svg className="h-12 w-12 text-sky-400 bg-white p-2 rounded-full" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="university" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path></svg>
              <span className="text-4xl font-bold">{cards}</span>
              <span>Amakarita wize</span>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="h-6 w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
            </div>
        </div>
    )
  } else if (contents){
    return (
      <div className="flex flex-col">
        <div className="flex p-2 items-center gap-2">
          <AiOutlineMenu color="black" className="h-4 w-4"/>
          <span className='text-sm font-medium'>Ibice bigize isomo</span>
        </div>
        { newContents.map((item, index) => <Content contentIndex={index} focus={handleFocus} key={index} lesson={item.lesson} contents={item.contents} focused={item.focused || false} selected={checked} check={handleCheck}/>)}
      </div>
    )
  }
} 