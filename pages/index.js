import VM from "@/components/vmission"
import Hero from '@/components/hero';
import Services from '@/components/services';
import Benefits from '@/components/benefits';
import TeamComponent from '@/components/team'
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Index() {
  return (
    <main>
      <div className='relative md:absolute w-full top-0'><Hero/></div>
      <div className='hidden md:flex invisible w-full'><Hero/></div>
      <div className="p-4 md:py-0 md:px-16 flex flex-col gap-4 md:gap-8" id="about">
        <h1 className="text-center text-2xl font-bold">About Us</h1>
        <p className="text-gray-800 text-justify text-xl">Welcome to RestoreHealth Initiatives—where students and healthcare providers unite to champion community-based interventions. We're passionate about proactive healthcare, encouraging healthy lifestyles, and improving access to quality services. Explore our initiatives to join our movement. Together, as students and healthcare advocates, let's make a lasting impact on community well-being.</p>
      </div>
      <Services/>
      <Benefits/>
      <div className="relative bg-cyan-900 m-2 md:m-12 lg:m-16">
        <VM/>
      </div>
      <div id="team" className="p-2 md:p-12 lg:p-16"><TeamComponent/></div>
      <div className="w-full px-2 md:px-12 lg:px-16"><Contact/></div>
      <Footer/>
    </main>
  )
}
