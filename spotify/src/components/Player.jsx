import { assets ,songsData} from '../assets/assets';

const Player = () => {
  return ( 
    <div className="h-[100%] w-[100%] bg-orange-200 flex justify-between items-center text-white px-4 my-2">
      <div className="flex lg:flex items-center gap-4">
        <img className='w-12' src={songsData[0].image} alt="" />
        <div className="">
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0,12)} </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img src={assets.shuffle_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.prev_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.play_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.next_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
            <p>1:06</p>
            <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"> <hr className='h-1 w-40 border-none bg-green-800 rounded-full' /></div>
            <p>3:20</p>

        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className='w-4' src={assets.play_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" /> 
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className='w-4' src={assets.mini_player_icon} alt="" /> 
        <img className='w-4' src={assets.zoom_icon} alt="" /> 
      </div>
    </div>
  )
}

export default Player