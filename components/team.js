import Image from "next/image"

export default function TeamComponent(){
    return (
        <div className="bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-cyan-900 py-4">Meet Our Team</h1>
            <div className="flex flex-col md:grid grid-cols-3 p-12 gap-4 md:gap-12 flex-wrap justify-center">                 
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image height={500} width={500} className="w-full h-fit rounded-full px-2 md:px-4" src="/images/1.png" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="uppercase">Mushinzimana</span> Obed</div>
              <p className="text-gray-700 text-base">President</p>
            </div>
          </div>            
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image height={500} width={500} className="w-full h-fit rounded-full px-2 md:px-4" src="/images/3.jpeg" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="uppercase">Hasengeniza</span> Emmanuel</div>
              <p className="text-gray-700 text-base">Vice President</p>
            </div>
          </div>                         
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image height={500} width={500} className="bg-white w-full h-fit rounded-full px-2 md:px-4" src="/images/2.png" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="uppercase">Nuwayo</span> Mateme Claudette</div>
              <p className="text-gray-700 text-base">Project Officer</p>
            </div>
          </div>   
        </div>
        <div className="grid grid-cols-2 gap-12 p-12 justify-center mx-auto w-8/12">
           {/* <!-- Team member card --> */}
           <div className="bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image height={500} width={500} className="w-full h-fit rounded-full px-2 md:px-4" src="/images/5.jpeg" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="uppercase">Dufitibyiringiro</span> Sylivie</div>
              <p className="text-gray-700 text-base">Secretary</p>
            </div>
          </div>
           {/* <!-- Team member card --> */}
           <div className="bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image height={500} width={500} className="bg-white w-full h-fit rounded-full px-2 md:px-4" src="/images/6.jpeg" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="uppercase">Ndacyayisaba</span> Eric</div>
              <p className="text-gray-700 text-base">Communication Officer</p>
            </div>
          </div> 
        </div>
      </div>
    )
}