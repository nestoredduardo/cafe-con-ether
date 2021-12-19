import { Text, VStack, Image } from "@chakra-ui/react"

import banner from "../assets/banner.jpg"
import profile from "../assets/profile.jpg"

const Profile = () => {
  return (
    <VStack>
      <Image src={banner} boxSize="full" />
      <Image src={profile} boxSize="64px" borderRadius="full" />
      <Text>Nestor Mamani</Text>
      <Text>Web artisan 🦄</Text>
    </VStack>
  )
}

export default Profile
