import { HStack, Image, Text } from "@chakra-ui/react"

import logo from "../assets/logo.png"

const Header = () => {
  return (
    <HStack px="8" py="4">
      <Image boxSize="60px" height="auto" src={logo} />
      <Text fontWeight="semibold" fontSize="2xl">
        Café con Ether
      </Text>
    </HStack>
  )
}

export default Header
