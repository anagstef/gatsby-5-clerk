import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { RedirectToSignIn, SignedIn, SignedOut } from "gatsby-plugin-clerk"

const ProtectedPage = () => {
    return (<>Protected Page!</>);
}

const Protected: React.FC<PageProps> = () => {
    return (
        <>
          <SignedIn>
            <ProtectedPage />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
    )
  }
  
  export default Protected