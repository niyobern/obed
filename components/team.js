import Image from "next/image"

export default function TeamComponent(){
    return (
        <div className="bg-gray-100 m-2 md:m-12 lg:m-16">
            <h1 className="text-4xl font-bold text-center text-cyan-900 py-4">Meet Our Team</h1>
            <div className="flex flex-col md:grid grid-cols-3 gap-4 md:gap-12 flex-wrap justify-center">                 
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={500} width={500} className="w-full h-full rounded-full px-2 md:px-4" src="/images/2.jpg" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex-col flex items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="capitalize">Mushinzimana</span> Obed</div>
              <p className="text-gray-700 text-base">President</p>
            </div>
            <div className="px-6 py-4 flex-col flex items-center text-center flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>            
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={500} width={500} className="w-full h-full rounded-full px-2 md:px-4" src="/images/5.jpeg" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex-col flex items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="capitalize">Hasengeniza</span> Emmanuel</div>
              <p className="text-gray-700 text-base">Vice President</p>
            </div>
            <div className="px-6 py-4 flex-col flex items-center text-center flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>            
          </div> 
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={500} width={500} className="w-full h-full rounded-full px-2 md:px-4" src="/images/3.jpeg" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex-col flex items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="capitalize">Nuwayo</span> Mateme Claudette</div>
              <p className="text-gray-700 text-base">Project Officer</p>
            </div>
            <div className="px-6 py-4 flex-col flex items-center text-center flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>   
          <div className="flex justify-center w-8/12 mx-auto">
            {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={500} width={500} className="w-full h-full rounded-full px-2 md:px-4" src="/images/6.jpeg" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex-col flex items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="capitalize">Dufitibyiringiro</span> Sylivie</div>
              <p className="text-gray-700 text-base">Secretary</p>
            </div>
            <div className="px-6 py-4 flex-col flex items-center text-center flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
           {/* <!-- Team member card --> */}
           <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={500} width={500} className="bg-white w-full h-full rounded-full px-2 md:px-4" src="/images/1.png" alt="Team member photo"></Image>
            <div className="px-6 py-4 flex-col flex items-center text-center">
              <div className="font-bold text-xl mb-2"><span className="capitalize">Ndacyayisaba</span> Eric</div>
              <p className="text-gray-700 text-base">Communication Officer</p>
            </div>
            <div className="px-6 py-4 flex-col flex items-center text-center flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>              
        </div>
          </div>
      </div>
    )
}