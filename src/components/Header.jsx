import { HStack, Image, Text } from '@chakra-ui/react'

import logo from '../assets/logo.png'

const Header = () => {
  return (
    <HStack px={{ base: '8', xl: '64' }} py="4">
      <Image boxSize="60px" height="auto" src={logo} />
      <Text fontWeight="semibold" fontSize="2xl">
        Ethergram
      </Text>
    </HStack>
  )
}

export default Header
