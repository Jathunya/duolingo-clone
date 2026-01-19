import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SidebarItem from './sidebar-item'

type Props = {
    className?: string
}

const Sidebar = ({className}: Props) => {
  return (
    <div className={cn(
        'flex h-full lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
        className,
    )}>
        <Link href="/learn">
            <div className='pt-8 l-4 pb-7 flex items-center gap-x-3'>
                <Image src="/mascot.png" height={40} width={40} alt="mascot"/>
                    <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'> 
                        Lingo
                        </h1>
            </div>
        </Link>
        <div className='flex flex-col gap-y-2 flex-1'>
            <SidebarItem />
        </div>
    </div>
  )
}

export default Sidebar