import { Box, Flex } from '@chakra-ui/react'
import Description from './Description'
import PartnerList from './PartnerList'

import Profile from './Profile'

const Main = ({ totalWaves, children, partnerList }) => {
  return (
    <Box mx={{ xl: '64' }}>
      <Profile />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        mt="4"
        p={{ base: '2', xl: '0' }}
        mx={{ base: '4', lg: '43', xl: '0' }}
        justify={{ lg: 'space-around', xl: 'space-between' }}
      >
        <Description totalWaves={totalWaves} />
        {children}
      </Flex>
      <PartnerList partnerList={partnerList} />
    </Box>
  )
}

export default Main
