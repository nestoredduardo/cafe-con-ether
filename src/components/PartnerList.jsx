import { HStack, List, ListItem, Text, Image } from '@chakra-ui/react'

const PartnerList = ({ partnerList }) => {
  return (
    <List>
      {partnerList.map((partner) => {
        const name = partner[0] ? partner[0] : 'Someone'
        const message = partner[1]
        const gifLink = message.slice(message.length - 3) === 'gif'
        return (
          <ListItem>
            <HStack>
              <Text>{name}</Text>
              <Text>Envió un saludo</Text>
            </HStack>
            {gifLink ? <Image src={message} /> : <Text>{message}</Text>}
          </ListItem>
        )
      })}
    </List>
  )
}

export default PartnerList
