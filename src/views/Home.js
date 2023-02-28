import React from 'react'
import Hero from '../components/Home/Hero'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <React.Fragment>
        <Hero/>
        <Box h="100vh"></Box>
    </React.Fragment>
  )
}

export default Home