import FeedWrapper from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import React from 'react'
import Header from './header'


const page = () => {
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6 '>
      <StickyWrapper>
        My Sticky Sidebar
      </StickyWrapper>
      <FeedWrapper>
        <Header title="spanish" />
      </FeedWrapper>
    </div>
  )
}

export default page
