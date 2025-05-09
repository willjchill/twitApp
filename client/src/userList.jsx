import { useState } from 'react'

function UserList() {
  let [users, setUsers] = useState([]);

  let usersJSX = users.map((user) => (<p key={user["id"]}>{user["username"]}</p>));

  async function getUsers() {
    const resp = await fetch("http://localhost:3000/users");
    const data = await resp.json();
    console.log(data);
    setUsers(data);
  }

  return (
    <>
      <button onClick={getUsers}>Retrieve Users</button>
      {usersJSX}
    </>
  );
}

export default UserList;
