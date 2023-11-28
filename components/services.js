import NavBar from "./navbar";
import { useState } from "react";

export default function Services(){
    const [selected, setSelected] = useState(-1)
    return (
        <div>
            <div className="flex flex-col gap-12 px-2 md:px-6 lg:px-10" id="services">
                <h1 className="text-center text-2xl font-bold">Our services</h1>
                <div className="flex flex-col md:grid grid-cols-4 gap-6 lg:gap-6">
                    {selected !== 0 ? 
                    (
                        <div className={`${selected === - 1 ? "justify-between": "justify-start"} flex flex-col rounded-3xl p-6 h-full gap-2 text-center items-center hover:bg-sky-500 group`}>
                            <h1 className="group-hover:text-white text-lg font-semibold">Raising awareness</h1>
                            <p className="text-gray-900 group-hover:text-white">Increasing Community awareness about the risk factors, causes, symptooms and prevention</p>
                            <button onClick={() => setSelected(0)} className="text-blue-600 group-hover:bg-orange-600 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Read More</button>
                        </div>
                    ) : (
                        <div className="flex flex-col rounded-3xl px-2 py-6 justify-between h-full gap-2 text-justify items-center hover:bg-sky-500 group">
                            <h1 className="group-hover:text-white text-lg font-semibold">Raising awareness</h1>
                            <div className="text-gray-900 group-hover:text-white">At RestoreHealth Initiatives, we believe in the power of knowledge to transform lives. Our commitment to raising awareness is at the forefront of our mission. Through engaging initiatives, we strive to increase community awareness regarding the comprehensive spectrum of health – from understanding risk factors and causes to recognizing symptoms and embracing preventative measures. By empowering communities with knowledge, we pave the way for informed decision-making and proactive health management. Join us in spreading awareness, as together we build a healthier, more resilient society. Your involvement makes a significant impact, contributing to a community that is well-informed, empowered, and better equipped for a healthier future.</div>
                            <button onClick={() => setSelected(-1)} className="text-blue-600 group-hover:bg-fuchsia-700 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Show less</button>
                        </div>
                    )}
                    {selected !== 1 ? 
                    (
                        <div className={`${selected === - 1 ? "justify-between": "justify-start"} flex flex-col rounded-3xl p-6 h-full gap-2 text-center items-center hover:bg-sky-500 group`}>
                            <h1 className="group-hover:text-white text-lg font-semibold">Encouraging healthy lifestyles</h1>
                            <p className="text-gray-900 group-hover:text-white">Promoting healthy eating habits, regural physical activities, and smoking cessation to reduce prevalence of diseases</p>
                            <button onClick={() => setSelected(1)} className="text-blue-600 group-hover:bg-orange-600 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Read More</button>
                        </div>
                    ) : (
                        <div className="flex flex-col rounded-3xl px-2 py-6 justify-between h-full gap-2 text-justify items-center hover:bg-sky-500 group">
                            <h1 className="group-hover:text-white text-lg font-semibold">Encouraging healthy lifestyles</h1>
                            <div className="text-gray-900 group-hover:text-white">Empowering individuals to lead healthier lives is at the heart of our mission. At RestoreHealth Initiatives, we champion the cultivation of robust well-being through the encouragement of healthy lifestyles. This involves not only promoting but passionately advocating for the adoption of nourishing habits, emphasizing the significance of regular physical activity, and providing dedicated support for smoking cessation. By fostering these positive changes, we aim to significantly reduce the prevalence of diseases and enhance the overall quality of life. Join us in this transformative journey as we collectively strive to inspire and enable individuals to embrace vibrant, health-focused lifestyles.</div>
                            <button onClick={() => setSelected(-1)} className="text-blue-600 group-hover:bg-fuchsia-700 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Show less</button>
                        </div>
                    )}
                    {selected !== 2 ? 
                    (
                        <div className={`${selected === - 1 ? "justify-between": "justify-start"} flex flex-col rounded-3xl p-6 h-full gap-2 text-center items-center hover:bg-sky-500 group`}>
                            <h1 className="group-hover:text-white text-lg font-semibold">Enabling early detection</h1>
                            <p className="text-gray-900 group-hover:text-white">Establishing screening programs and health checkups to faciitate early detection and intervention for at risk individuals</p>
                            <button onClick={() => setSelected(2)} className="text-blue-600 group-hover:bg-orange-600 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Read More</button>
                        </div>
                    ) : (
                        <div className="flex flex-col rounded-3xl px-2 py-6 justify-between h-full gap-2 text-justify items-center hover:bg-sky-500 group">
                            <h1 className="group-hover:text-white text-lg font-semibold">Enabling early detection</h1>
                            <div className="text-gray-900 group-hover:text-white">At RestoreHealth Initiatives, we are dedicated to enabling early detection and intervention as a cornerstone of proactive healthcare. Through the establishment of comprehensive screening programs and accessible health checkups, we aim to identify health risks in individuals at an early stage. By fostering a culture of vigilant health monitoring, we empower at-risk individuals to take prompt action, ensuring timely interventions that can positively impact outcomes. Join us in our commitment to making early detection a priority, safeguarding health and well-being. Together, let's build a healthier future through proactive healthcare initiatives that make a lasting difference in people's lives.</div>
                            <button onClick={() => setSelected(-1)} className="text-blue-600 group-hover:bg-fuchsia-700 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Show less</button>
                        </div>
                    )}
                    {selected !== 3 ? 
                    (
                        <div className={`${selected === - 1 ? "justify-between": "justify-start"} flex flex-col rounded-3xl p-6 h-full gap-2 text-center items-center hover:bg-sky-500 group`}>
                            <h1 className="group-hover:text-white text-lg font-semibold">Enhancing healthcare access</h1>
                            <p className="text-gray-900 group-hover:text-white">Improving access to quality healthcare services, medications and treatment options for those diagnosd with NCDs</p>
                            <button onClick={() => setSelected(3)} className="text-blue-600 group-hover:bg-orange-600 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Read More</button>
                        </div>
                    ) : (
                        <div className="flex flex-col rounded-3xl px-2 py-6 justify-between h-full gap-2 text-justify items-center hover:bg-sky-500 group">
                            <h1 className="group-hover:text-white text-lg font-semibold">Enhancing healthcare access</h1>
                            <div className="text-gray-900 group-hover:text-white">At RestoreHealth Initiatives, our focus extends beyond awareness to tangible change. We are dedicated to enhancing access to quality healthcare for those diagnosed with Non-Communicable Diseases (NCDs). Through strategic initiatives, we work tirelessly to improve accessibility to essential healthcare services, medications, and a spectrum of treatment options. Our goal is to break down barriers, ensuring that individuals facing NCDs receive comprehensive care that aligns with the highest standards. Join us in this mission to transform access to healthcare, making quality treatment a reality for all. Your support contributes to a future where everyone, regardless of circumstance, has equitable access to the care they need.</div>
                            <button onClick={() => setSelected(-1)} className="text-blue-600 group-hover:bg-fuchsia-700 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Show less</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}