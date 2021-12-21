import { VStack, Text, Box, HStack, Link, Icon, Image } from '@chakra-ui/react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import logo from '../assets/logo.png'

const Description = ({ totalWaves }) => {
  return (
    <VStack>
      <Text fontSize="xl" fontWeight="semibold" w="full" align="start">
        Descripción
      </Text>
      <Box>
        <Text>Hola, soy Nestor</Text>
        <Text>
          Desarrollo páginas web como en la que estás ahora y me gusta probar
          nuevas tecnologías, por ejemplo el backend de esta web está en un
          contrato inteligente de la tesnet Rinkeby de Ethereum. Interesante no?
        </Text>
        <Text my="4">
          Asi que puedes dejarme un saludo👋, emojis random 🍆🍭🎈, tu
          portafolio, un media gift de{' '}
          <Link href="https://giphy.com/" target="_blank" rel="noreferrer">
            Giphy
          </Link>{' '}
          o lo que quieras y quedará guardado en la blockchain 🤯{' '}
        </Text>
      </Box>
      <HStack w="full" color="#1ac9d1">
        <Link href="https://twitter.com/nestoredduardo" target="_blank">
          <Icon as={BsTwitter} w="6" h="6" />
        </Link>
        <Link>
          <Icon as={BsInstagram} w="6" h="6" />
        </Link>
        <Link>
          <Icon as={AiFillGithub} w="6" h="6" />
        </Link>
        <Link>
          <Icon as={AiFillLinkedin} w="6" h="6" />
        </Link>
      </HStack>
      <HStack>
        <Text>Web Dev</Text>
        <Text>Data Science</Text>
        <Text>Tech</Text>
      </HStack>
      <HStack>
        <Image src={logo} boxSize="30px" height="auto" />
        <Text>x {totalWaves} saludos</Text>
      </HStack>
    </VStack>
  )
}

export default Description
