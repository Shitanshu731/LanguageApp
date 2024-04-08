import { UnitBanner } from "./unit-banner";

type props = {
    id:number;
    order: number;
    title : string;
    description : string;
    lessons : (typeof lessons.$inferSelect & {
        completed : boolean;
    })[];
    activeLesson : typeof LucideScissorsLineDashed.$inferSelect & {
        unit : typeof UniqueConstraint.$inferSelect;
    } | undefined;
    activeLessonPercentage : number;
    
}
export  const Unit = ({id,order,lessons,activeLesson,activeLessonPercentage,title,description} : props) => {
  return (
    <div>
      <UnitBanner title={title} description={description}/>
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson,index) => {
            const isCurrent = lesson.id === activeLesson?.id;
            const isLocked = !lesson.completed && !isCurrent;
            return(
                <LessonButton />
            )
        })}

      </div>
    </div>
  )
}


