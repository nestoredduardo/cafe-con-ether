import {
  Button,
  Form,
  FormControl,
  FormLabel,
  Grid,
  Input,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useForm } from 'react-hook-form'

import abi from './utils/WavePortal.json'

import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  const { register, handleSubmit } = useForm()

  const [currentAccount, setCurrentAccount] = useState('')
  const [totalWaves, setTotalWaves] = useState('')
  const [loading, setLoading] = useState(false)

  const contractAddress = '0x81F6FfF9137081904D414747bE32fb00F47245c3'
  const contractABI = abi.abi

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
        const account = account[0]
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

  const getWaveNumber = async () => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )

        let count = await wavePortalContract.getTotalWaves()
        console.log('Wave number', count.toNumber())
        setTotalWaves(count.toNumber())
      } else {
        console.log("Ethereum object doesn't exist")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const wave = async (data) => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )

        const waveTxn = await wavePortalContract.wave(
          data.name,
          data.message,
          1
        )
        console.log('Minting...', waveTxn.hash)

        await waveTxn.wait()
        console.log('Mined --', waveTxn.hash)

        getWaveNumber()
      } else {
        console.log("Ethereum object doesn't exist")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
    getWaveNumber()
  }, [])

  return (
    <>
      <Header />
      <Grid>
        <Main />
        {!currentAccount ? (
          <Button as="button" onClick={connectWallet}>
            Conectar Wallet
          </Button>
        ) : (
          <form onSubmit={handleSubmit(wave)} autoComplete="off">
            <FormControl>
              <FormLabel>Nombre o Twitter username😎</FormLabel>
              <Input {...register('name')} />
            </FormControl>
            <FormControl>
              <FormLabel>Mensaje</FormLabel>
              <Input {...register('message')} />
            </FormControl>
            <Button type="submit">Envía tu saludo</Button>
          </form>
        )}
      </Grid>
    </>
  )
}

export default App
