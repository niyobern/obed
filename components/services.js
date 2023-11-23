import NavBar from "./navbar";

export default function Services(){
    return (
        <div>
            <div className="flex flex-col gap-12 px-2 md:px-6 lg:px-10">
                <h1 className="text-center text-2xl font-bold">Our services</h1>
                <div className="flex flex-col md:grid grid-cols-4 gap-6 lg:gap-6">
                    <div className="flex flex-col rounded-3xl p-6 justify-between h-full gap-2 text-center items-center hover:bg-sky-500 group">
                        <h1 className="group-hover:text-white text-lg font-semibold">Raising awareness</h1>
                        <p className="text-gray-900 group-hover:text-white">Increasing Community awareness about the risk factors, causes, symptooms and prevention</p>
                        <button className="text-blue-600 group-hover:bg-orange-600 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Read More</button>
                    </div>
                    <div className="flex flex-col rounded-3xl p-6 justify-between h-full gap-2 text-center items-center hover:bg-sky-500 group">
                        <h1 className="group-hover:text-white text-lg font-semibold">Encouraging healthy lifestyles</h1>
                        <p className="text-gray-900 group-hover:text-white">Promoting healthy eating habits, regural physical activities, and smoking cessation to reduce prevalence of diseases</p>
                        <button className="text-blue-600 group-hover:bg-orange-600 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Read More</button>
                    </div>
                    <div className="flex flex-col rounded-3xl p-6 justify-between h-full gap-2 text-center items-center hover:bg-sky-500 group">
                        <h1 className="group-hover:text-white text-lg font-semibold">Enabling early detection</h1>
                        <p className="text-gray-900 group-hover:text-white">Establishing screening programs and health checkups to faciitate early detection and intervention for at risk individuals</p>
                        <button className="text-blue-600 group-hover:bg-orange-600 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Read More</button>
                    </div>
                    <div className="flex flex-col rounded-3xl p-6 justify-between h-full gap-2 text-center items-center hover:bg-sky-500 group">
                        <h1 className="group-hover:text-white text-lg font-semibold">Enhancing healthcare access</h1>
                        <p className="text-gray-900 group-hover:text-white">Improving access to quality healthcare services, medications and treatment options for those diagnosd with NCDs</p>
                        <button className="text-blue-600 group-hover:bg-orange-600 group-hover:text-white hover:bg-white hover:text-blue-800 w-fit mt-4 border border-blue-600 rounded-l-full rounded-r-full p-1 px-4">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}