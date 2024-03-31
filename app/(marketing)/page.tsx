import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignIn, SignInButton, SignUp, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[998px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 ">
      <div className="relative w-[240px] h-[240px] lg:w-[420px] lg:h-[424px] mb-8 lg:mb-0">
      <Image src ="/hero.svg" alt ="Hero" fill />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center ">
            Learn, Practise and master new languages with Lingo.
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground"/>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button variant="secondary" className="w-full">
                    Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button variant="primaryOutline" className="w-full">
                    I already Have an Account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button variant="secondary" size="lg">
                <Link href ="/learn">
                  Continue Learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
