function Post() {
  return (
    <div className="flex border-b-1 border-gray-300 p-8">
      <img src="/src/png/avatar_placeholder.png" className="w-10 h-10 rounded rounded-full" />
      <form className="flex-none pl-8 pr-16 flex flex-col items-end w-full h-20">
        <input className="w-full h-3/4 focus:outline-none focus:ring-0 focus:border-transparent" placeholder="What's happening?" />
        <button className="h-1/4 cursor-pointer bg-sky-500 rounded-xl text-white font-bold w-20 h-8 hover:bg-sky-700" type='submit'>Tweet</button>
      </form>
    </div>
  );
}

export default Post;
