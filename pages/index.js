import Image from 'next/image';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Benefits from '@/components/benefits';

export default function Index() {
  return (
    <main>
      <div className='absolute w-full top-0'><Hero/></div>
      <div className='invisible w-full'><Hero/></div>
      <Services/>
      <Benefits/>
    </main>
  )
}
