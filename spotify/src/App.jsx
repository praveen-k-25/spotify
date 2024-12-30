import './App.css'
import Nav from './components/Nav'

import Sidebar from './components/Sidebar'

import Player from './components/Player'
import Display from './components/Display'


function App() {
 
  return (
    <div className={`h-[100vh] bg-black flex flex-col min-w-[800px] bg-blue-900 min-h-[600px]`}>
      <div className="">
        <Nav/>
      </div>
      <div className="flex h-[79.5vh] flex-grow ">
        <Sidebar className={'overflow-y-scroll'} />
        <Display className={'overflow-y-scroll'}/>
      </div>
      <div className="pb-1 mb-1 ">
        <Player/>
      </div> 
    </div>
  )
}

export default App