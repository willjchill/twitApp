import Post from './Post.jsx'

function Feed(props) {
  return (
    <div className='bg-red-50 w-160 border-r-1 border-gray-300'>
      <h1 className='text-xl border-b-1 border-b-gray-300 p-4'>Welcome <b>Home</b>, @{props.uid}</h1>
      <Post />
    </div>
  );
}

export default Feed;
