import { HStack, List, ListItem, Text, Image, Button } from '@chakra-ui/react'

const PartnerList = ({ partnerList }) => {
  return (
    <List mx="6">
      {partnerList ? (
        partnerList.map((partner, index) => {
          const name = partner[0] ? partner[0] : 'Someone'
          const message = partner[1]
          const gifLink = message.slice(message.length - 3) === 'gif'
          return (
            <ListItem
              key={index}
              boxShadow="md"
              px="3"
              py="2"
              my="3"
              border="2px"
              borderColor="gray.200"
              borderRadius="xl"
            >
              <HStack>
                <Text fontWeight="bold">{name}</Text>
                <Text>Envió un saludo</Text>
              </HStack>
              {gifLink ? (
                <Image mt="2" src={message} />
              ) : (
                <Text mt="2">{message}</Text>
              )}
            </ListItem>
          )
        })
      ) : (
        <Button isLoading />
      )}
    </List>
  )
}

export default PartnerList
