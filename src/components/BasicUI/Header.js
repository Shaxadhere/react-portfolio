import { useDisclosure, chakra, Flex, VisuallyHidden, HStack, Button, Box, IconButton, VStack, CloseButton, Text } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import React from 'react'

const Header = () => {
    const mobileNav = useDisclosure();

    const NavContent = () => {
        return (
            <React.Fragment>
                {[
                    { label: "Home", href: "#" },
                    { label: "About", href: "#" },
                    { label: "Portfolio", href: "#" },
                    { label: "Contact", href: "#" },
                    { label: "Blog", href: "#" },
                ].map((item, index) =>
                    <Button
                        key={index}
                        variant="ghost"
                        color="#fff"
                        _hover={{
                            background:"trasnparent",
                            color: "#FFB400"
                        }}
                        _focus={{
                            background:"trasnparent",
                            color: "#FFB400"
                        }}
                    >
                        {item.label}
                    </Button>
                )}
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <chakra.header
                bg={"#0b0b0b"}
                w="full"
                px={{
                    base: 2,
                    sm: 4,
                }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="brand.500"
                            display={{
                                base: "none",
                                md: "inline-flex",
                            }}
                        >
                            <NavContent />
                        </HStack>
                        <Box
                            display={{
                                base: "inline-flex",
                                md: "none",
                            }}
                        >
                            <IconButton
                                display={{
                                    base: "flex",
                                    md: "none",
                                }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="gray.800"
                                _dark={{
                                    color: "inherit",
                                }}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={"#0b0b0b"}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />
                                <NavContent />
                            </VStack>
                        </Box>
                    </HStack>
                    <Flex>
                        <chakra.div
                            display="flex"
                            alignItems="center"
                        >
                            <VisuallyHidden>
                                <Flex>
                                    <Text color="#fff" fontSize="lg" fontWeight="medium">Email:</Text>
                                    <chakra.a fontSize="lg" fontWeight="medium" ml={1} href="mailto:shaxad.here@gmail.com">shaxad.here@gmail.com </chakra.a>
                                </Flex>
                            </VisuallyHidden>
                        </chakra.div>
                        <Flex>
                            <Text color="#fff" fontSize="lg" fontWeight="medium">Email:</Text>
                            <chakra.a href="mailto:shaxad.here@gmail.com" fontSize="lg" fontWeight="medium" ml="1" color="#FFB400">
                                shaxad.here@gmail.com
                            </chakra.a>
                        </Flex>
                    </Flex>

                </Flex>
            </chakra.header>
        </React.Fragment>
    )
}

export default Header
