import VM from "@/components/vmission"
import Hero from '@/components/hero';
import Services from '@/components/services';
import Benefits from '@/components/benefits';
import TeamComponent from '@/components/team'

export default function Index() {
  return (
    <main>
      <div className='absolute w-full top-0'><Hero/></div>
      <div className='invisible w-full'><Hero/></div>
      <Services/>
      <Benefits/>
      <div className="relative bg-black m-2 md:m-12 lg:m-16">
        <svg className="object-fill absolute opacity-50 h-full w-fit" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1900 900'><rect fill='#ffffff' width='1900' height='900'/><defs><linearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(73,0.5,0.5)'><stop  offset='0' stop-color='#48EAFF'/><stop  offset='1' stop-color='#CF6'/></linearGradient><linearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(173,0.5,0.5)'><stop  offset='0' stop-color='#F00'/><stop  offset='1' stop-color='#FC0'/></linearGradient></defs><g fill='#FFF' fill-opacity='0' stroke-miterlimit='10'><g  stroke='url(#a)' stroke-width='18.479999999999997'><path  transform='translate(-67.9 0.3999999999999986) rotate(-3.8000000000000007 1409 581) scale(0.944732)' d='M1409 581 1450.35 511 1490 581z'/><circle  stroke-width='6.16' transform='translate(-95.5 55) rotate(3 800 450) scale(1.000818)' cx='500' cy='100' r='40'/><path  transform='translate(6.300000000000001 -43.5) rotate(16.5 401 736) scale(1.000818)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/></g><g stroke='url(#b)' stroke-width='5.6'><path  transform='translate(330 5) rotate(-1.25 150 345) scale(0.9982439999999999)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/><rect  stroke-width='12.32' transform='translate(-71.5 -151) rotate(3.5999999999999943 1089 759)' x='1039' y='709' width='100' height='100'/><path  transform='translate(-178.8 45.2) rotate(0.6000000000000014 1400 132) scale(0.865)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/></g></g></svg>
        <VM/>
      </div>
      <TeamComponent/>
    </main>
  )
}
