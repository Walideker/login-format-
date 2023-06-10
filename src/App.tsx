import { useState } from 'react'
import './App.css'

function App() {

  const username: String = "walideker"
  const psswd: string = "minouch"
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [logged, setLogged] = useState(false)
  function login() {
    if (userName == username && password == psswd)
      return setLogged(true)
      else setLogged(false)
  }


  return (
    <div className="App">
      <h1>login</h1>
      <div>  <input type="text" onChange={(e) => setUserName(e.target.value)} /></div>
      <div>  <input type="password" onChange={(e) => setPassword(e.target.value)} /></div>
      <button onClick={login} >submit</button>
      {logged ? <h1>u r in </h1> : <h1>u r not in </h1>}
    </div>
  )
}

export default App
