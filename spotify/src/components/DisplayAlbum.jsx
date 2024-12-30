import React from 'react'
import { useParams } from 'react-router-dom'
import { assets ,songsData} from '../assets/assets';

const DisplayAlbum = () => {
    const {id} = useParams();
    const song = songsData.filter((item)=>
        Number(item.id) == Number(id)
    )
    
    
return (
    <div className=''>
        <div className='flex items-center gap-2 mt-4 bg-[#121212] text-[13px]'>
            <button className="bg-white text-black py-1 px-3 rounded-2xl cursor-pointer">All</button>
            <button className="bg-white text-black py-1 px-3 rounded-2xl cursor-pointer">Music</button>
            <button className="bg-white text-black py-1 px-3 rounded-2xl cursor-pointer">Podcasts</button>
        </div>
        <img src={song[0].image} alt="" />
        
    </div>
  )
}

export default DisplayAlbum