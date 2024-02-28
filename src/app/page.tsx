import { HomeHeader } from "@/components/HomeHeader";
import { HomeSearch } from "@/components/HomeSearch";
import App from "next/app";
import Image from 'next/image'



export default function Home() {
  return (
    <section className="bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-900 text-white">
      {/* bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-900 */}
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        {/* <Image 
          src="/images/hero.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}

        {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
          <h1 className='text-[80px] text-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Traverse</h1>
        {/* </div> */}
        
     <HomeSearch />
      </div>
    </section>
     
    
      
     
    
    
  );
}
