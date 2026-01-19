"use client";

import React from 'react'
import { Button } from '@/components/ui/button';

type Props ={
    label: string;
    iconSrc: string;
    href: string;
}

const SidebarItem = ({
    label,
    iconSrc,
    href,
}:Props) => {
  return (
    <Button>
        {label}
    </Button>
  )
}

export default SidebarItem