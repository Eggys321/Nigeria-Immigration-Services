import React from 'react';
import Hero from '@/components/Hero';
import { heroData } from '@/data/heroData';
import VisitorsStatus from './components/VisitorsStatus';
import GetStarted from './components/GetStarted';

const Home = () => {
  return (
    <>
   {/* <main className='container mx-auto px-[15px] py-7 md:px-[100px] md:py-[18px]'>
     <h1 className=''>Home</h1>
   
   </main> */}
     <Hero {  ...heroData.home}/>
     <div className='hidden md:block'>

     <VisitorsStatus/>
     </div>
     
     <GetStarted/>
    </>
  )
}

export default Home