import { Text, VStack, Image } from '@chakra-ui/react'

import banner from '../assets/banner.jpg'
import profile from '../assets/profile.jpg'

const Profile = () => {
  return (
    <VStack pos="relative">
      <Image src={banner} boxSize="full" height={{ md: '350px' }} pb="10" />
      <Image
        src={profile}
        boxSize="120px"
        pos="absolute"
        bottom="69"
        borderRadius="full"
        border="4px"
        borderColor="white"
      />
      <Text fontSize="2xl" fontWeight="semibold">
        Nestor Mamani
      </Text>
      <Text fontSize="xl" mt="0px">
        Web artisan 🦄
      </Text>
    </VStack>
  )
}

export default Profile
