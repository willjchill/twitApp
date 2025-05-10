import UserList from './userList.jsx'

function Home(props) {
  return (
    <>
      <h1>Hello {props.uid}.</h1>
      <UserList />
    </>
  );
}

export default Home;
