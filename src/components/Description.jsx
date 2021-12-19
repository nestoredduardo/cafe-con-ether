import { VStack, Text, Box, HStack, Link, Icon } from "@chakra-ui/react"
import { BsTwitter, BsInstagram } from "react-icons/bs"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Description = () => {
  return (
    <VStack>
      <Text>Descripción</Text>
      <Box>
        <Text>Hola, soy Nestor</Text>
        <Text>
          Desarrollo páginas web como en la que estás ahora y me gusta probar
          nuevas tecnologías, por ejemplo el backend de esta web está en un
          contrato inteligente de la tesnet Rinkeby de Ethereum. Interesante no?
        </Text>
        <Text>
          Asi que puedes dejarme un saludo👋, emojis random 🍆🍭🎈, tu
          portafolio o lo que quieras y quedará guardado en la blockchain 🤯{" "}
        </Text>
      </Box>
      <HStack>
        <Link href="https://twitter.com/nestoredduardo" target="_blank">
          <Icon as={BsTwitter} />
        </Link>
        <Link>
          <Icon as={BsInstagram} />
        </Link>
        <Link>
          <Icon as={AiFillGithub} />
        </Link>
        <Link>
          <Icon as={AiFillLinkedin} />
        </Link>
      </HStack>
      <HStack>
        <Text>Web Dev</Text>
        <Text>Data Science</Text>
        <Text>Tech</Text>
      </HStack>
    </VStack>
  )
}

export default Description
