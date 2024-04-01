import { cn } from '@/lib/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import SidebarItem from './sidebar-item';

type props = {
    className? : string;
}

const Sidebar = ({ className }: props) => {
  return (
    <div className={cn("flex sidebar h-full md:w-[256px] md:fixed left-0 top-0 px-4 border-2 flex-col",className)}>
      <Link href="/learn">
        <div className='pt-8 pl-4 pb-7 items-center gap-x-3 flex'>
        <Image src="/mascot.svg" alt="Mascot" height ={40} width={40}/>
        <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>
          Language
        </h1>
      </div>
      </Link>
      <div className='flex flex-col gap-y-2 flex-1'>
        <SidebarItem label="learn" href ="" iconSrc=""/>

      </div>
    </div>
  )
}

export default Sidebar
