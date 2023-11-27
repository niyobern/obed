import Image from "next/image"
import { FaPhoneVolume } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";

export default function TeamComponent(){
    return (
        <div className="bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-cyan-900 py-4">Meet Our Team</h1>
            <div className="flex flex-col md:grid grid-cols-3 p-12 gap-4 md:gap-8 lg:gap-12 flex-wrap justify-center">                 
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image height={500} width={500} className="w-full h-fit rounded-full px-2 md:px-4" src="/images/1.png" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="uppercase">Mushinzimana</span> Obed</div>
              <p className="text-gray-700 text-base">President</p>
            </div>
            <div className="flex gap-8 justify-center p-2">
              <div className="group flex flex-col cursor-pointer gap-2">
                <FaPhoneVolume color="green" size={18}/>
                <a href="tel:0791163629" className="font-medium text-lg text-cyan-900 hidden group-hover:flex">0791 163 629</a>
              </div>
              <div className="group flex flex-col cursor-pointer gap-2">
                <div className="group-hover:self-end"><AiTwotoneMail color="blue" size={20}/></div>
                <a href="mailto:obed@restorehealthinitiaves.org" className="font-medium text-cyan-800 hidden group-hover:flex">obed@restorehealthinitiaves.org</a>
              </div>
            </div>
          </div>            
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image height={500} width={500} className="w-full h-fit rounded-full px-2 md:px-4" src="/images/3.jpeg" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="uppercase">Hasengineza</span> Emmanuel</div>
              <p className="text-gray-700 text-base">Vice President</p>
            </div>
            <div className="flex gap-8 justify-center p-2">
              <div className="group flex flex-col cursor-pointer gap-2">
                <FaPhoneVolume color="green" size={18}/>
                <a href="tel:0723104116" className="font-medium text-lg text-cyan-900 hidden group-hover:flex">0723 104 116</a>
              </div>
              <div className="group flex flex-col cursor-pointer gap-2">
                <div className="group-hover:self-end"><AiTwotoneMail color="blue" size={20}/></div>
                <a href="mailto:emmanuel@restorehealthinitiaves.org" className="font-medium text-cyan-800 hidden group-hover:flex">emmanuel@restorehealthinitiaves.org</a>
              </div>
            </div>
          </div>                         
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image height={500} width={500} className="bg-white w-full h-fit rounded-full px-2 md:px-4" src="/images/2.png" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="uppercase">Nuwayo</span> Mateme Claudette</div>
              <p className="text-gray-700 text-base">Project Officer</p>
            </div>
            <div className="flex gap-8 justify-center p-2">
              <div className="group flex flex-col cursor-pointer gap-2">
                <FaPhoneVolume color="green" size={18}/>
                <a href="tel:0738591124" className="font-medium text-lg text-cyan-900 hidden group-hover:flex">0738 591 124</a>
              </div>
              <div className="group flex flex-col cursor-pointer gap-2">
                <div className="group-hover:self-end"><AiTwotoneMail color="blue" size={20}/></div>
                <a href="mailto:claudette@restorehealthinitiaves.org" className="font-medium text-cyan-800 hidden group-hover:flex">claudette@restorehealthinitiaves.org</a>
              </div>
            </div>
          </div>   
        </div>
        <div className="flex flex-col md:grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 p-12 justify-center mx-auto w-full md:w-8/12">
           {/* <!-- Team member card --> */}
           <div className="bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image height={500} width={500} className="w-full h-fit rounded-full px-2 md:px-4" src="/images/5.jpeg" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="uppercase">Dufitibyiringiro</span> Sylivie</div>
              <p className="text-gray-700 text-base">Secretary</p>
            </div>
            <div className="flex gap-8 justify-center p-2">
              <div className="group flex flex-col cursor-pointer gap-2">
                <FaPhoneVolume color="green" size={18}/>
                <a href="tel:0783025023" className="font-medium text-lg text-cyan-900 hidden group-hover:flex">0783 025 023</a>
              </div>
              <div className="group flex flex-col cursor-pointer gap-2">
                <div className="group-hover:self-end"><AiTwotoneMail color="blue" size={20}/></div>
                <a href="mailto:sylivie@restorehealthinitiaves.org" className="font-medium text-cyan-800 hidden group-hover:flex">sylivie@restorehealthinitiaves.org</a>
              </div>
            </div>
          </div>
           {/* <!-- Team member card --> */}
           <div className="bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image height={500} width={500} className="bg-white w-full h-fit rounded-full px-2 md:px-4" src="/images/6.jpeg" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="uppercase">Ndacyayisaba</span> Eric</div>
              <p className="text-gray-700 text-base">Communication Officer</p>
            </div>
            <div className="flex gap-8 justify-center p-2">
              <div className="group flex flex-col cursor-pointer gap-2">
                <FaPhoneVolume color="green" size={18}/>
                <a href="tel:0721115090" className="font-medium text-lg text-cyan-900 hidden group-hover:flex">0721 115 090</a>
              </div>
              <div className="group flex flex-col cursor-pointer gap-2">
                <div className="group-hover:self-end"><AiTwotoneMail color="blue" size={20}/></div>
                <a href="mailto:eric@restorehealthinitiaves.org" className="font-medium text-cyan-800 hidden group-hover:flex">eric@restorehealthinitiaves.org</a>
              </div>
            </div>
          </div> 
        </div>
      </div>
    )
}