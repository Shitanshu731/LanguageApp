import React from 'react'

type props ={
    title : string;
}

const Header = ({title} : props) => {
  return (
    <div className='sticky top-0 bg-ehite pb-3 md:pt-[28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 md:z-50'>
      {title}
    </div>
  )
}

export default Header
