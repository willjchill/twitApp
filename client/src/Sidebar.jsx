import Logout from './Logout.jsx'
import SidebarIcon from './SidebarIcon.jsx'
function Sidebar(props) {
  return (
    <div className='border-r-1 border-r-gray-300 sticky top-0 w-1/4 h-screen max-w-128'>
      <div className='absolute right-0 inline-flex flex-col items-end space-y-8 p-4'>
        <SidebarIcon name={""} link={"/src/svg/twitterlogo.svg"} img_size={"w-12 h-12"} />
        <SidebarIcon name={"Home"} link={"/src/svg/home.svg"} />
        <SidebarIcon name={"Search"} link={"/src/svg/search.svg"} />
        <SidebarIcon name={"Profile"} link={"/src/svg/profile.svg"} />
        <Logout setLogin={props.setLogin} />
      </div>
    </div>
  );
}

export default Sidebar;
