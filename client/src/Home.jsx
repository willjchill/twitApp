import Sidebar from './Sidebar.jsx'
import Feed from './Feed.jsx'

function Home(props) {
  return (
    <>
      <Sidebar {...props} />
      <Feed {...props} />
    </>
  );
}

export default Home;
