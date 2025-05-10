import { useState } from 'react'
import Home from './Home.jsx'
import Login from './Login.jsx'

// Two main pages: LOGIN and HOME
// If user successfully logins -> HOME
// Else -> LOGIN

function App() {
  let [login, setLogin] = useState(false); // for login
  let [uid, setUID] = useState("");

  return (<>
    {login ? <Home uid={uid} /> : <Login setUID={setUID} setLogin={setLogin} />}
  </>);
}

export default App
