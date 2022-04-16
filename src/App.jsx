import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useForm } from 'react-hook-form'

import abi from './utils/WavePortal.json'

import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  const { register, handleSubmit } = useForm()

  const [wavePortalContract, setWavePortalContract] = useState(null)
  const [currentAccount, setCurrentAccount] = useState('')
  const [totalWaves, setTotalWaves] = useState('')
  const [partnerList, setPartnerList] = useState('')
  const [loading, setLoading] = useState(false)

  const contractAddress = '0x5254614A0DE7EFc32D67501DdaD22c3aacceF182'
  const contractABI = abi.abi

  const getContract = () => {
    const provider = new ethers.providers.InfuraProvider(
      'rinkeby',
      process.env.REACT_APP_INFURA_PROJECT_ID
    )

    const newWavePortalContract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    )
    setWavePortalContract(newWavePortalContract)

    getWaveNumber(newWavePortalContract)
    getPartnerList(newWavePortalContract)
  }

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert('Make sure you have Metamask')
        return
      } else {
        console.log('We have the ethereum object', ethereum)
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length !== 0) {
        const account = accounts[0]
        console.log('Found account:', account)
        setCurrentAccount(account)
      } else {
        console.log('No authorize account found!!!!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert('Get Metamask bby!')
        return
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Connected', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)
    }
  }

  const getWaveNumber = async (wavePortalContract) => {
    try {
      let count = await wavePortalContract.getTotalWaves()
      console.log('Wave number', count.toNumber())
      setTotalWaves(count.toNumber())
    } catch (error) {
      console.log(error)
    }
  }

  const getPartnerList = async (wavePortalContract) => {
    try {
      const list = await wavePortalContract.getPartnerList()
      console.log('PartnerList:', list)
      setPartnerList(list)
    } catch (error) {
      console.log(error)
    }
  }

  const changeToRinkebyNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x4' }],
      })
    } catch (error) {
      console.log(error)
    }
  }

  const wave = async (data) => {
    try {
      const { ethereum } = window

      if (ethereum) {
        await changeToRinkebyNetwork()
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )

        const name = data.name === '' ? 'Someone' : data.name

        const waveTxn = await wavePortalContract.wave(name, data.message)
        console.log('Minting...', waveTxn.hash)
        setLoading(true)

        await waveTxn.wait()
        console.log('Mined --', waveTxn.hash)
        setLoading(false)

        getWaveNumber(wavePortalContract)
        getPartnerList(wavePortalContract)
      } else {
        alert('Make sure you have Metamask')
        console.log("Ethereum object doesn't exist")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getContract()
    checkIfWalletIsConnected()
  }, [])

  return (
    <>
      <Header />
      <Main totalWaves={totalWaves} partnerList={partnerList}>
        {!currentAccount ? (
          <Button
            as="button"
            onClick={connectWallet}
            bgGradient="linear(to-r, #FFCC33, #E233FF)"
            color="white"
            fontWeight="bold"
            width={{ base: 'fit-content', md: 'full' }}
            maxW="400px"
            mx="auto"
            mb="8"
          >
            Conectar Wallet
          </Button>
        ) : (
          <Box
            boxShadow="base"
            rounded="md"
            px="4"
            py="4"
            border="1px"
            borderColor="cyan.200"
            height="fit-content"
            w={{ lg: '320px', xl: '450px' }}
          >
            <form onSubmit={handleSubmit(wave)} autoComplete="off">
              <Text fontSize="xl">Envía un saludo!</Text>
              <FormControl my="3">
                <FormLabel>Nombre o Twitter username😎</FormLabel>
                <Input required={true} {...register('name')} />
              </FormControl>
              <FormControl>
                <FormLabel>Mensaje</FormLabel>
                <Input required={true} {...register('message')} />
              </FormControl>
              <Button
                type="submit"
                isLoading={loading}
                loadingText="Escribiendo en la blockchain..."
                bgGradient="linear(to-r, #FFCC33, #E233FF)"
                color="white"
                mt="3"
              >
                Envía tu saludo
              </Button>
            </form>
          </Box>
        )}
      </Main>
    </>
  )
}

export default App
