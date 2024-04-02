"use client"
import { courses, userProgress } from '@/db/schema'
import React, { startTransition, useTransition } from 'react'
import Card from './card';
import { useRouter } from 'next/navigation';
import { upsertUserProgress } from '@/actions/user-progress';
import { toast } from 'sonner';
type props ={
    courses : typeof courses.$inferSelect[];
    activeCourseId? : typeof userProgress.$inferSelect.activeCourseId;
}
export const List = ({courses, activeCourseId} : props) => {
  const router = useRouter();
  const [pending,setTransition] = useTransition();
  const onClick = (id:number) => {
    if(pending) return;

    if(id === activeCourseId)
    return router.push("/learn");

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went Wrong"))
    })
  }
  return (
    <div className='pt-6 grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4'>
      {courses.map((course) => (
        <Card
            key={course.id}
            title={course.title}
            id={course.id}
            imageSrc={course.imageSrc}
            onClick={onClick}
            active={course.id === activeCourseId}
        />
      ))}
    </div>
  )
}

