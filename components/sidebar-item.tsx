"use client"
import React from 'react'
import { Button } from './ui/button';

type props ={
    label : string;
    iconSrc : string;
    href : string;
}

const SidebarItem = ({label,iconSrc,href} : props) => {
  return (
    <Button variant="secondary">
        {label}
    </Button>
  )
}

export default SidebarItem
