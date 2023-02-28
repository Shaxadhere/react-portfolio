import React from 'react'
import { Box, Flex, Heading, Text, chakra, SlideFade } from '@chakra-ui/react'

const Hero = () => {
    return (
        <Flex h="calc(100vh - 72px)" justify={"center"} align={"center"} id="home">
            <SlideFade in={true}>
                <Box>
                    <Heading
                        fontSize={"150px"}
                        textShadow={"8px 8px #fff, 20px 20px #222"}
                        color="transparent"
                        letterSpacing={"0.1em"}
                        fontWeight={"900"}
                        lineHeight={"1.0"}
                    >
                        <Text>Hello<chakra.span textShadow="8px 8px #ffb400, 20px 20px #222">.</chakra.span></Text>
                        <Flex align={"center"}>
                            <Text>I am</Text>
                            <Text
                                fontSize="16px"
                                textShadow={"none"}
                                color={"#fff"}
                                w="200px"
                                ml={10}
                                letterSpacing={"0.1em"}
                                fontWeight={"normal"}
                            >
                                MERN Stack Developer with 3+ years of experience based in Karachi
                            </Text>
                        </Flex>
                        <Text>Shehzad</Text>
                    </Heading>
                </Box>
            </SlideFade>

        </Flex >
    )
}

export default Hero