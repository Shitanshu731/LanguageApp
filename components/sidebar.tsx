import { cn } from '@/lib/utils'
import React from 'react'

type props = {
    className? : string;
}

const Sidebar = ({ className }: props) => {
  return (
    <div className={cn("flex sidebar bg-blue-500 h-full md:w-[256px] md:fixed left-0 top-0 px-4 border-2 flex-col",className)}>
        Sidebar
    </div>
  )
}

export default Sidebar
