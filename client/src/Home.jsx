import UserList from './userList.jsx'
import Logout from './Logout.jsx'

function Home(props) {
  return (
    <>
      <h1>Hello {props.uid}.</h1>
      <UserList />
      <br /> <br />
      <Logout setLogin={props.setLogin} />
    </>
  );
}

export default Home;
