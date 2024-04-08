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
export  const unit = ({} : props) => {
  return (
    <div>
      
    </div>
  )
}


