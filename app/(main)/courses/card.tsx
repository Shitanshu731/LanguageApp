import React from 'react'
type props ={
    title : string;
    id : number;
    imageSrc: string;
    onClick:(id:number) => void;
    disabled?: boolean;
    active?: boolean;
}
const Card = ({} : props) => {
  return (
    <div>
      Card
    </div>
  )
}

export default Card
