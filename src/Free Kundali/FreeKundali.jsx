import React from 'react'
// import { Link } from 'react-router-dom'

import Service from '../Component/Service'
import KundaliHeader from './KundaliHeader'
import KundaliForm from './KundaliForm'
import ContextProvider from '../Context/ContextProvider'

function FreeKundali() {
  return (
    <ContextProvider>
        
        <KundaliHeader/>
        <KundaliForm/>
        <Service/>
       

    </ContextProvider>
  )
}

export default FreeKundali