import { SparklesBackground } from '@/components/home/background-partical'
import { Button } from '@/components/ui/button'
import { Stack } from '@/components/home/stack'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col md:items-center md:pt-24 pt-12 ">
      <SparklesBackground>
        <h1 className="md:text-3xl text-2xl lg:text-5xl font-bold text-center relative z-20 md:max-w-[60%] pt-12">
          Full Stack Developer
        </h1>
        <span className="md:text-lg lg:text-xl text-sm font-medium text-black/40 dark:text-white/60 text-center mt-2 md:mt-0">
          focused on performance, scalability, and clean architecture.
        </span>
        <div className="flex gap-x-4 md:pt-4 pt-8">
          <Button className="min-w-32 rounded-full cursor-pointer">About Me</Button>
          <Link
            className="min-w-32 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/30
           dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-black dark:text-white hover:bg-white/20 dark:hover:bg-black/30 transition-all cursor-pointer"
            href={'https://github.com/Phoenixixixi/portofolio-mugiwara'}
          >
            Github
          </Link>
        </div>
        <div className="w-full mt-10 md:mt-0">
          <Stack />
        </div>
      </SparklesBackground>




    </div>
  )
}
