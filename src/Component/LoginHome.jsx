import React from 'react'
import { Navbar1 } from './Subcomponent/Navbar'
const LoginHome = () => {
  return (
   <>
   <LoginNav/>
   </>
  )
}
export  default LoginHome

 export const LoginNav = () => {

  return (
    <>
    {/* navbar start */}
    <Navbar1/>
      {/* navbar end */}

    </>
  );
}





