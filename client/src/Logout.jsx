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
  return (<button onClick={submitLogout}>Logout</button>);
}

export default Logout;
