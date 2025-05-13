import { useState } from 'react'
import Home from './Home.jsx'
import Login from './Login.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'

// Two main pages: LOGIN and HOME
// If user successfully logins -> HOME
// Else -> LOGIN

function getCookie(name) {
  const value = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1];
  return value;
}

function App() {
  let [login, setLogin] = useState(getCookie('login')); // for login
  let [uid, setUID] = useState(getCookie('uid'));

  return (<>
    <Routes>
      {login ?
        <>
          <Route path="/" element={<Home uid={uid} setLogin={setLogin} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </> :
        <>
          <Route path="/login" element={<Login setUID={setUID} setLogin={setLogin} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      }
    </Routes>
  </>);
}

export default App
