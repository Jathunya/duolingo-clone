import React from 'react'
import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className='p-4 space-y-4 flex flex-col max-w-[200px]'>
        <Button>Default</Button>
        <Button variant="primary">primary</Button>
        <Button variant="primaryOutline">primary outline</Button>
    </div>
  )
}

export default ButtonsPage