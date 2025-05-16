import { useNavigate } from 'react-router-dom'

function Logout(props) {
  const navigate = useNavigate();
  const submitLogout = () => {
    props.setLogin(false);
    // delete appropiate cookies
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  }
  return (
    <button onClick={submitLogout} className='w-32 h-10 cursor-pointer bg-sky-500 hover:bg-sky-700 p-1 rounded-xl text-white font-bold'> Logout </button>
  );
}

export default Logout;
