import Link from 'next/link';
import { useState } from 'react'
import axios from 'axios';

export default function Register(){
    const [formData, setFormData] = useState({})
    function handleChange(e){
        const target = e.target
        const name = target.name
        const value = target.value
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        axios.post("https://nvb_backend-1-z3745144.deta.app/obed/users", formData)
        .then(() => alert("your details have been received"))
        .catch((err) => console.log(err))
    }   
    return (
<section className="text-gray-600 body-font justify-self-center w-full">
  <div className="container pt-0 mx-auto">
    <div className="flex lg:w-5/6 w-full  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="email"className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" required={true} onChange={handleChange} value={formData.email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="phone"className="leading-7 text-sm text-gray-600">Phone Number</label>
          <input type="text" id="phone" name="phone" required={true} onChange={handleChange} value={formData.phone} minLength={10} maxLength={10} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="name"className="leading-7 text-sm text-gray-600">Full Name</label>
          <input type="text" id="name" name="name" required={true} onChange={handleChange} value={formData.name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="profile"className="leading-7 text-sm text-gray-600">Profile</label>
          <select type="text" id="profile" name="profile" required={true} onChange={handleChange} value={formData.profile} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            <option className="p-1" value="">--</option>
            <option className="p-1" value="Student">Student</option>
            <option className="p-1" value="Registered Nurse">Registered Nurse</option>
          </select>
        </div>
        { formData.profile === "Student" && (
                <div className="relative flex-grow w-full">
                  <label htmlFor="university"className="leading-7 text-sm text-gray-600">University</label>
                  <select list="institutions" type="text" id="university" name="university" required={true} onChange={handleChange} value={formData.university} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option value="UR Huye"> University of Rwanda - Huye</option>
                    <option value="UR Rwamagana">University of Rwanda - Rwamagana</option>
                    <option value="Mount Kigali University">Mount Kigali UNited</option>
                    <option value="Kibogora Polytechnic">Kibogora Polytechnic</option>
                    <option value="AUCA">AUCA</option>
                    <option value="Ruli HI"></option>
                    <option value="EA Christian College"/>
                  </select>
                </div>
        )}
      <div className="relative flex flex-col w-full h-20 justify-end">
        <div className="flex justify-between">
            <button onClick={handleSubmit} className="text-white w-full bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Register</button>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}