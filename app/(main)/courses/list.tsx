"use client"
import { courses, userProgress } from '@/db/schema'
import React from 'react'
import Card from './card';
type props ={
    courses : typeof courses.$inferSelect[];
    activeCourseId? : typeof userProgress.$inferSelect.activeCourseId;
}
export const List = ({courses, activeCourseId} : props) => {
  return (
    <div className='pt-6 grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4'>
      {courses.map((course) => (
        <Card
            key={course.id}
            title={course.title}
            id={course.id}
            imageSrc={course.imageSrc}
            onClick={() => {}}
            active={course.id === activeCourseId}
        />
      ))}
    </div>
  )
}

