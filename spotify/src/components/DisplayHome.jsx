import {albumsData,songsData} from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItems from './SongItems'
const DisplayHome = () => {
  return (
    <div className=" overflow-y-scroll">
      <div className='flex items-center gap-2 mt-4 bg-[#121212] text-[13px]'>
        <button className="bg-white text-black py-1 px-3 rounded-2xl cursor-pointer">All</button>
        <button className="bg-white text-black py-1 px-3 rounded-2xl cursor-pointer">Music</button>
        <button className="bg-white text-black py-1 px-3 rounded-2xl cursor-pointer">Podcasts</button>
      </div>
      <div className="mb-4">
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item,index)=>(<AlbumItem key={index} 
          name={item.name}
          image={item.image}
          desc = {item.desc}
          id = {item.id}
          />))}
        </div>
      </div>

        <div className="mb-4">
          <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
          <div className="flex overflow-auto">
            {songsData.map((item)=>(
              <SongItems
                key={item.id}
                name={item.name}
                desc = {item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default DisplayHome