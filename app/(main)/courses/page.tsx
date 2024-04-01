import { getCourses } from '@/db/query'
import React from 'react'
import { List } from './list';

const page = async() => {
    const data = await getCourses();
  return (
    <div className='h-full max-w-[912px] px-3 mx-auto'>
        <h1 className='text-2xl font-bold text-neutral-700 '>
            Language Courses
        </h1>
        <List courses={data} activeCourseId={1}/>
        {JSON.stringify(data)}
    </div>
  )
}

export default page
