import { courses } from '@/db/schema'
import React from 'react'
type props ={
    courses : typeof courses.$inferSelect[];
    activeCourseId : number;
}
export const List = ({courses, activeCourseId} : props) => {
  return (
    <div>
      List
    </div>
  )
}

