import Sidebar from './Sidebar.jsx'
import Feed from './Feed.jsx'

function Home(props) {
  return (
    <div className='flex'>
      <Sidebar {...props} />
      <Feed {...props} />
    </div>
  );
}

export default Home;
