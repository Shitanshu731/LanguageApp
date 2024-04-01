import { StickyWrapper } from '@/components/sticky-wrapper'
import React from 'react'


const page = () => {
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6 '>
      <StickyWrapper>
        My Sticky Sidebar
      </StickyWrapper>
    </div>
  )
}

export default page
