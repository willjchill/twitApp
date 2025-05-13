import Logout from './Logout.jsx'

function Sidebar(props) {
  return (
    <>
      <div>
        <Logout setLogin={props.setLogin} />
      </div>
    </>
  );
}

export default Sidebar;
