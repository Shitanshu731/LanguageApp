import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import {Loader} from "lucide-react"
import { SignedIn, UserButton, SignInButton, SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 px-4 border-slate-200'>
     <div className='md:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
      <div className='pt-8 pl-4 pb-7 items-center gap-x-3 flex'>
        <Image src="/mascot.svg" alt="Mascot" height ={40} width={40}/>
        <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>
          Language
        </h1>
      </div>
      <ClerkLoading>
        <Loader  className='h-5 w-5 text-muted-foreground animate-spin'/>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <UserButton afterSignOutUrl='/'/>
        </SignedIn>
        <SignedOut>
          <SignInButton
          mode="modal"
          afterSignInUrl='/learn'
          afterSignUpUrl='/learn'
          >
            <Button variant="ghost" size="lg">
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
