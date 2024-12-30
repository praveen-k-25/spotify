
import { assets } from '../assets/assets';
import '../App.css';
import { useState } from 'react';
const Sidebar = () => {
    const [width,setWidth] = useState(0);
  return (
  
      <div className={`bg-[#121212] text-white  rounded-xl ${(width === 0) ? 'min-w-[250px]':'w-[50px]'} m-2 p-2 h-[99%] overflow-y-scroll`}>
        <div className={`flex items-center justify-between   rounded-md p-1 m-1 `}>
          <div className="flex items-center gap-3">
            <img className='w-6' src={assets.stack_icon} alt="" onClick={()=>(width === 0) ? setWidth(1):setWidth(0)} />
            <p className="font-semibold text-[14px]">Your Library</p>
          </div>
          <div className="flex items-center gap-3 hover:bg-[#3d3b3b97] w-7 h-7 justify-center rounded-3xl ">
            <img className='w-4' src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className=" flex  text-[14px] py-1 mt-3 ">
          <div className="me-2 px-3 py-2 rounded-3xl bg-[#3d3b3b97]">Playlists</div>
          <div className="me-2 px-3 py-2 rounded-3xl bg-[#3d3b3b97]">Artist</div>
        </div>

        <div className="flex items-center gap-2 justify-between">
          <div className=" h  rounded-lg mt-3 flex " >
            <div className={`bg-transparent flex w-7 h-7 justify-center items-center hover:bg-[#3d3b3b97] hover:rounded-3xl absolute`}>
              <img className='w-4  ' src={assets.search_icon} alt=""/>
            </div>
            <input className={`bg-[#3d3b3b97] rounded-lg h-7 pl-7 pr-2 text-[12px] outline-none`} type="text" />
          </div>
          <div className={` p-1 mt-3 pr-2 `}>
            <p className='text-[14px]'>recents</p>
          </div>
        </div>
        

        <div className="p-4 bg-[#242424] m-2 mt-3 rounded font-semibold flex flex-col items-start justify-start">
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