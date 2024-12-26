import './App.css'
import Nav from './components/Nav'
import Original from './components/Original'
import Sidebar from './components/Sidebar'
import Author from './components/Author'
import Player from './components/Player'


function App() {
 
  return (
    <div className={`h-[100vh] bg-black flex flex-col min-w-[800px]`}>
      <div className="">
        <Nav/>
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <Original/>
        <Author/>
      </div>
      <div className="">
        <Player/>
      </div> 
    </div>
  )
}

export default App