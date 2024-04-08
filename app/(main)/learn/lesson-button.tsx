"use client";
type props ={
    id:number;
    index:number;
    totalCount : number;
    locked?: boolean;
    current? : boolean;
    percentage:  number;
}

export const LessonButton = ({id,index,totalCount,locked,current,percentage}: props) => {
    const cycleLength = 8;
    const cycleIndex = index % cycleLength;

    let indentationLevel;

    if(cycleIndex <= 2){
        indentationLevel = cycleIndex;
    }else if(cycleIndex <= 4){
        indentationLevel = 4 - cycleIndex;
    }else if(cycleIndex <= 6){
        indentationLevel = 4-cycleIndex;
    }else{
        indentationLevel = cycleIndex - 8;
    }

    return (
        <div>
             
        </div>
    )
}