import Register from '@/components/register';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../../public/images/logo.png'

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#063970] to-blue-200">
    <div className="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <div className="text-center mb-4">
                <h6 className="font-semibold text-[#063970] text-xl">Register</h6>
                <Image src={Logo} alt="image" className='w-10 md:w-14 h-10 md:h-14 lg:w-20 lg:h-20 justify-self-center mx-auto'/>
            </div>
            <div className="space-y-5 tex-lg">
              <Register/>
            </div>
        </div>
</div>
</div>
  );
}