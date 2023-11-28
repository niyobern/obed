import Register from '@/components/register';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/images/logo.png'

export default function Email() {
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
    axios.post("https://nvb_backend-1-z3745144.deta.app/obed/reply", formData)
    .then(() => alert("Email Sent"))
    .catch((err) => console.log(err))
}
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#063970] to-blue-200">
    <div className="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <div className="text-center mb-2">
                <h6 className="font-semibold text-[#063970] text-xl">Send Email</h6>
                {/* <Image src={Logo} alt="image" className='w-16 md:w-24 h-10 md:h-16 lg:w-32 lg:h-24 justify-self-center mx-auto'/> */}
            </div>
            <div className="space-y-5 tex-lg">
            <section className="text-gray-600 body-font justify-self-center w-full">
                <div className="container pt-0 mx-auto">
                    <div className="flex lg:w-5/6 w-full  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="email"className="leading-7 text-sm text-gray-600"><span className='text-lg font-medium text-cyan-950'>To</span> (Destination email address)</label>
                            <input type="email" id="email" name="email" required={true} onChange={handleChange} value={formData.email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="subject"className="leading-7 text-sm text-gray-600"><span className='text-lg font-medium text-cyan-950'>Subject</span></label>
                            <input type="text" id="subject" name="subject" required={true} onChange={handleChange} value={formData.subject} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="message"className="leading-7 text-sm text-gray-600"><span className='text-lg font-medium text-cyan-950'>Message</span></label>
                            <textarea type="text" id="message" name="message" required={true} onChange={handleChange} value={formData.subject} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className='flex flex-col py-2 w-full'>
                            <button onClick={handleSubmit} className="text-white w-full bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Send</button>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
</div>
</div>
  );
}