
import { assets } from '../assets/assets';
const Sidebar = () => {
  return (
  
      <div className="bg-[#121212] h-[100%] rounded text-white w-[300px] ">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className='w-8' src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className='w-5' src={assets.arrow_icon} alt="" />
            <img className='w-5' src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start">
          <h1 className="text-[16px] font-bold">Create Your First Playlist</h1>
          <p className='font-light'>It's easy we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start">
          <h1 className="text-[16px] font-bold">Let's findsome podcast to follow</h1>
          <p className='font-light'>we'll keep update on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
        </div>
      </div>
  
  )
}

export default Sidebar 