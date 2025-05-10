import { useState } from 'react'

function Login(props) {
  let [invalid, setInvalid] = useState(false); // for error message
  const errorJSX = <p>Invalid username or password. Try again.</p>

  // read db to see if username and password is valid
  const tryLogin = async function(e) {
    e.preventDefault();
    try {
      let uid = e.target.elements.uid.value;
      let pid = e.target.elements.pid.value;
      console.log(uid, pid);
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: uid,
          password: pid
        })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      props.setUID(uid);
      props.setLogin(true);

    } catch (error) {
      console.error('Error:', error);
      setInvalid(true);
    }
  }

  return (
    <>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={tryLogin}>
        <div>
          <label>
            Username :
            <input type='text' name='uid' />
          </label>
        </div>
        <br />
        <div>
          <label>
            Password :
            <input type='text' name='pid' />
          </label>
        </div>
        <br />
        <button type='submit'>Login</button>
      </form>
      {invalid ? errorJSX : <p />}
    </>
  );
}

export default Login;
