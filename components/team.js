import Image from "next/image"

export default function TeamComponent(){
    return (
        <div className="bg-gray-100 m-2 md:m-12 lg:m-16">
            <h1 className="text-4xl font-bold text-center text-cyan-900 py-4">Meet Our Team</h1>
            <div className="flex flex-col md:grid grid-cols-3 gap-4 md:gap-0 flex-wrap justify-evenly">
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src="/images/1.jpg" alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mushinzimana Obed</div>
              <p className="text-gray-700 text-base">Co-founder and CEO</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>            
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src="/images/1.jpg" alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mushinzimana Obed</div>
              <p className="text-gray-700 text-base">Co-founder and CEO</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>            
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src="/images/2.jpg" alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mushinzimana Obed</div>
              <p className="text-gray-700 text-base">Co-founder and CEO</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>            
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src="/images/3.jpg" alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mushinzimana Obed</div>
              <p className="text-gray-700 text-base">Co-founder and CEO</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>            
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src="/images/4.jpg" alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mushinzimana Obed</div>
              <p className="text-gray-700 text-base">Co-founder and CEO</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>            
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src="/images/5.jpg" alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mushinzimana Obed</div>
              <p className="text-gray-700 text-base">Co-founder and CEO</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>            
           {/* <!-- Team member card --> */}
          <div className="w-full bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src="/images/6.jpg" alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mushinzimana Obed</div>
              <p className="text-gray-700 text-base">Co-founder and CEO</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
            </div>
          </div>            
        </div>
      </div>
    )
}