import { useEffect } from "react"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  const checkIfWalletIsConnected = () => {
    const { ethereum } = window
    if (!ethereum) {
      alert("Make sure you have Metamask")
      return
    } else {
      console.log("We have the ethereum object", ethereum)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
