import { ClerkLoading, SignedIn, SignOut, SignInButton, UserButton, SignedOut, ClerkLoaded, ClerkProvider } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import {Loader } from "lucide-react"
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 border-slate-200 px-4'>
        <div className='lg:ma-w-screen-lg mx-auto flex items-center justify-between h-full'>
          <div className='pt-8 l-4 pb-7 flex items-center gap-x-3'>
            <Image src="/mascot.png" height={40} width={40} alt="mascot"/>
            <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'> 
              Lingo
            </h1>
          </div>
            <ClerkLoading>
      <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
    </ClerkLoading>
    
    <ClerkLoaded>
      <SignedIn>
        <UserButton afterSignOutUrl="/" /> {/* ✅ แก้เป็น afterSignOutUrl */}
      </SignedIn>
      
      <SignedOut>
        <SignInButton
          mode="modal"
          forceRedirectUrl="/learn"
          signUpForceRedirectUrl="/learn"
        >
          <Button size="lg" variant="ghost">
            Login
          </Button>
        </SignInButton>
      </SignedOut>
    </ClerkLoaded>
        </div>
    </header>
  )
}

export default Header