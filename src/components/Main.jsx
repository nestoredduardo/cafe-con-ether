import { Box, Flex } from '@chakra-ui/react'
import Description from './Description'
import PartnerList from './PartnerList'

import Profile from './Profile'

const Main = ({ totalWaves, children, partnerList }) => {
  return (
    <Box>
      <Profile />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        mx="4"
        mt="4"
        p="2"
        mx={{ lg: '43' }}
        justify={{ lg: 'space-around' }}
      >
        <Description totalWaves={totalWaves} />
        {children}
      </Flex>
      <PartnerList partnerList={partnerList} />
    </Box>
  )
}

export default Main
