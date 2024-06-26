import { getCourses, getUserProgress } from '@/db/query'
import React from 'react'
import { List } from './list';

const page = async() => {
    const courses = await getCourses();
    const userProgress = await getUserProgress();
  return (
    <div className='h-full max-w-[912px] px-3 mx-auto'>
        <h1 className='text-2xl font-bold text-neutral-700 '>
            Language Courses
        </h1>
        <List courses={courses} activeCourseId={userProgress?.activeCourseId}/>
    </div>
  )
}

export default page
