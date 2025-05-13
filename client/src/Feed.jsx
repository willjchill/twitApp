import UserList from './userList.jsx'

function Feed(props) {
  return (
    <>
      <h1>{props.uid}</h1>
      <UserList />
      <br /> <br />
    </>
  );
}

export default Feed;
