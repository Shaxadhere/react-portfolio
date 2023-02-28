import React from 'react'
import Header from './Header'
import { chakra } from "@chakra-ui/react"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <chakra.main bg="#0b0b0b">
        <Outlet />
      </chakra.main>
    </React.Fragment>
  )
}

export default Layout