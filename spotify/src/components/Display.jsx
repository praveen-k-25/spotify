import React from 'react'
import {Route, Routes} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
  return (
    <div className=' rounded-xl bg-[#121212] text-white overflow-y-scroll lg:w-[75%] w-[400px] lg:ml-0 mt-2 me-1 px-10 py-1'>
        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
        </Routes>
    </div>
  )
}

export default Display