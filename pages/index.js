import VM from "@/components/vmission"
import Hero from '@/components/hero';
import Services from '@/components/services';
import Benefits from '@/components/benefits';
import TeamComponent from '@/components/team'
import Contact from "@/components/contact";

export default function Index() {
  return (
    <main>
      <div className='relative md:absolute w-full top-0'><Hero/></div>
      <div className='hidden md:flex invisible w-full'><Hero/></div>
      <Services/>
      <Benefits/>
      <div className="relative bg-black m-2 md:m-12 lg:m-16">
        <VM/>
      </div>
      <div id="team" className="p-2 md:p-12 lg:p-16"><TeamComponent/></div>
      <Contact/>
    </main>
  )
}
