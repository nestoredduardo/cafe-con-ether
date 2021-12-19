import { Button, Grid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("")

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert("Make sure you have Metamask")
        return
      } else {
        console.log("We have the ethereum object", ethereum)
      }

      const accounts = await ethereum.request({ method: "eth_accounts" })

      if (accounts.length !== 0) {
        const account = account[0]
        console.log("Found account:", account)
        setCurrentAccount(account)
      } else {
        console.log("No authorize account found!!!!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert("Get Metamask bby!")
        return
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" })

      console.log("Connected", accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <>
      <Header />
      <Grid>
        <Main />
        {!currentAccount && (
          <Button as="button" onClick={connectWallet}>
            Conectar Wallet
          </Button>
        )}
      </Grid>
    </>
  )
}

export default App
