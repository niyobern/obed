import { FaCircleCheck } from "react-icons/fa6";

export default function Benefits(){
    return (
        <div className="px-2 md:px-10 lg:px-16 pt-4 md:pt-8">
            <div className="flex flex-col bg-cyan-700 rounded-xl p-0 md:p-8 h-fit">
                <div className="text-center pt-4 text-3xl font-medium text-white">Discover The exlusive benefits awaiting you</div>
                <p className="py-4 text-white text-sm text-center">We encourage you to join the team and these are some of the benefits waiting to meet you onboard ...</p>
                <div className="flex flex-col mx-auto w-full md:w-1/2 gap-2 px:2 md:px-4 lg:px-8 shadow bg-white rounded py-6">
                    <div className="flex gap-4 text-cyan-900 items-center">
                        <FaCircleCheck />
                        <span>Professional Development</span>
                    </div>
                    <div className="flex gap-4 text-cyan-900 items-center">
                        <FaCircleCheck />
                        <span>Networking Opportunities</span>
                    </div>
                    <div className="flex gap-4 text-cyan-900 items-center">
                        <FaCircleCheck />
                        <span>Community Impact</span>
                    </div>
                    <div className="flex gap-4 text-cyan-900 items-center">
                        <FaCircleCheck />
                        <span>Skills Enhancement</span>
                    </div>
                    <div className="flex gap-4 text-cyan-900 items-center">
                        <FaCircleCheck />
                        <span>Resume/CV Building</span>
                    </div>
                    <div className="flex gap-4 text-cyan-900 items-center">
                        <FaCircleCheck />
                        <span>Visibility and Recognition</span>
                    </div>
                    <div className="flex gap-4 text-cyan-900 items-center">
                        <FaCircleCheck />
                        <span>Access to Job Opportunities</span>
                    </div>
                    <div className="flex gap-4 text-cyan-900 items-center">
                        <FaCircleCheck />
                        <span>Access to Job Opportunities</span>
                    </div>
                </div>
            </div>
        </div>
    )
}