import NavBar from "./navbar";

export default function Hero(){
    return (
        <div className="absolute w-full top-0 bg-cyan-900 h-screen text-white">
            <div className="invisible"><NavBar/></div>
            <div className=" flex flex-col md:grid grid-cols-3 py-8 gap-8">
                <div className="col-span-2 flex flex-col w-full px-20">
                    <div className="text-6xl font-medium leading-relaxed">Find The <span className="text-green-600">Best</span> <br/> Support for your <br/> <span className="text-amber-400">Health</span> care</div>
                    <div className="text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</div>
                    <div className="p-2 px-4 w-fit my-4 md:mt-6 lg:mt-8 rounded-l-full rounded-r-full bg-orange-600">Book an Appointment</div>
                </div>
                <div className="col-span-1 hidden:md:flex flex-col"></div>
            </div>
        </div>
    )
}