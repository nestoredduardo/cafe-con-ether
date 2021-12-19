import { useEffect } from "react"

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

  return
}

export default App
