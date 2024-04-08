import { UnitBannrt } from "./unit-banner";

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
export  const Unit = ({title,description} : props) => {
  return (
    <div>
      <UnitBannrt title={title} description={description}/>
    </div>
  )
}


