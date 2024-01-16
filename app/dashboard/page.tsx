
import { CardDemo } from '@/components/card-render'
import { ModeToggle } from '@/components/toggle-mode'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='top-4 right-4 fixed'>
        <UserButton afterSignOutUrl='/'/> 
        </div>
    <div className='gap-x-4 flex flex-row '>
    <h1 className='text-3xl items-center flex flex-col justify-center
    w-full font-semibold'>
      Welcome to the test docker next application 
    </h1>
    <ModeToggle/>
    </div>
    <CardDemo/>
    </main>
  )
}
