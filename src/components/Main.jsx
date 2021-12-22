import { Box, Flex } from '@chakra-ui/react'
import Description from './Description'
import PartnerList from './PartnerList'

import Profile from './Profile'

const Main = ({ totalWaves, children, partnerList }) => {
  return (
    <Box>
      <Profile />
      <Flex direction="column" m="4" p="2">
        <Description totalWaves={totalWaves} />
        {children}
      </Flex>
      <PartnerList partnerList={partnerList} />
    </Box>
  )
}

export default Main
