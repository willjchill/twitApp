import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {
  let [invalid, setInvalid] = useState(false); // for error message
  const errorJSX = <p>Invalid username or password. Try again.</p>
  const navigate = useNavigate();

  // read db to see if username and password is valid
  const tryLogin = async function(e) {
    e.preventDefault();
    try {
      let uid = e.target.elements.uid.value;
      let pid = e.target.elements.pid.value;

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
      console.log(response);
      if (!response.ok) {
        throw new Error('Login failed');
      }
      props.setUID(uid);
      props.setLogin(true);
      navigate('/');
      document.cookie = `login=true;`
      document.cookie = `uid=${uid};`
    } catch (error) {
      console.error('Error:', error);
      setInvalid(true);
    }
  }

  return (
    <div className='h-screen w-screen flex justify-center align-middle'>
      <div className='pt-5 flex flex-col gap-4 align-middle h-1/2 w-1/2 max-h-120 max-w-120'>
        <div className='flex justify-center'>
          <img src='/src/svg/twitterlogo.svg' className='w-16 h-16' />
        </div>
        <h1 className='font-bold text-center'>Log in to Twitter (Clone)</h1>
        <form className='flex flex-col gap-4' onSubmit={tryLogin}>
          <div className='relative'>
            <input type='text' name='uid' className='peer h-12 w-full border-b-2 border-gray-300 bg-transparent pt-4 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none' placeholder='Username' />
            <label htmlFor='uid' className='pointer-events-none absolute left-0 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500'>
              Username
            </label>
          </div>
          <div className='relative'>
            <input type='text' name='pid' className='peer h-12 w-full border-b-2 border-gray-300 bg-transparent pt-4 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none' placeholder='Password' />
            <label htmlFor='pid' className='pointer-events-none absolute left-0 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500'>
              Password
            </label>
          </div>
          <button type='submit' className='cursor-pointer bg-sky-500 hover:bg-sky-700 p-2 rounded-md text-white font-bold'>
            Log In
          </button>
        </form>
        {invalid ? errorJSX : <p />}
      </div>
    </div>
  );
}

export default Login;
