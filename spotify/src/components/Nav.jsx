import { useEffect, useRef, useState } from 'react';
import { assets } from '../assets/assets';
import '../App.css'

const Nav = () => {
    const [focus,setFocus] = useState(false);
    const [expand,setExpand] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        
        
        if(focus){
        const interval = setInterval(() => {
          inputRef.current?.focus();
        }, 800); // Focus the input every 3 seconds
        
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }
      }, [focus]);
    

return (
    <div className=''>
     <div className={ `p-[10px] pl-5 bg-black text-white flex item-middle justify-between `}>
        <div className=" home flex items-center ml-1 mr-4 ">
            <img className='w-8 ' src={assets.spotify_logo} alt="" />
        </div>

        <div id='search' className={` flex items-center gap-2 border-white justify-start md:max-w-[54vw] md:flex-grow lg:flex-grow-0 lg:w-[600px]`} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} >

            <div className={`home bg-[#3d3b3b] w-12 h-12 ms-2 rounded-3xl flex justify-center items-center opacity-50 hover:opacity-100`}>
                <img className='w-7 p-[1px]' src={assets.home_icon} alt="" />
            </div>
            {/* -------------------------------------------------- */}
            <div className={` flex-col flex-grow border-[1px] rounded-3xl w-12 overflow-x-hidden ${expand ? 'display fo' : 'display2'} ${focus ? ' border-white onF ' : 'border-[#262424]'} `} >

                <div className="absolute " onClick={(e)=>{
            e.stopPropagation();
            setExpand(!expand);
            !expand ? setFocus(true): setFocus(false) ;

        }}>
                    <div className="w-12 h-12 bg-[#262424] grid place-content-center rounded-3xl">
                        <img className={`w-7 ps-[2px] p-[3px] opacity-65 hover:opacity-100 `} src={assets.search_icon} alt="" />
                    </div>
                </div>
                
                <div className="flex flex-grow m-3 ps-[45px] ">
                    <input ref={inputRef} className='outline-none bg-transparent flex-grow' type="text" placeholder='What do you want to play?' />
                    <img className='w-6 h-6 grid place-content-center ' src={assets.stack} alt="" />
                </div>
                
                
                    
                
                
            </div>
            {/* <div className={`flex items-center gap-4 bg-[#262424] px-4 h-12 rounded-3xl md:flex-grow w-[360px] border-2  ${focus ? ' border-white' : 'border-[#262424]'}`}>
                    
                    <img className='w-7 ' src={assets.search_icon} alt="" />
                        <input className='p-2 rounded-3xl bg-transparent flex-grow  md:flex-grow outline-none'   type="text" placeholder='What do you want to play?' />
                        <div className="flex items-center  border-l border-l-white pl-2" >
                        <div className="relative" onClick={()=>handle()}>
                            <img className='w-7 bg-transparent' src={assets.stack_icon} alt="" />
                            <p className=" edit absolute top-[11px] left-[18.5px] w-[5px] h-[8px] bg-[#171616] rounded-3xl transform  blur-[0.23px] " ref={inputRef}></p>
                        </div>
                        </div>
            </div> */}
            {/* ----------------------------------------------- */}
     </div>
     <div className="bg-black w-[25px] flex flex-grow md:hidden"></div>
        <div className="access flex justify-center items-center  gap-4 ml-5">
            <p className=" bg-white text-black text-[14px] font-semibold p-1 px-3 rounded-3xl hidden lg:block">Explore Premium</p>
            <div className="">
                <a className='text-white whitespace-nowrap text-[13px] font-semibold mr-6'  href="">Install App</a>
            </div>
            <img className='w-4 h-4 m-3' src={assets.bell_icon} alt="" />
            <div className="bg-[#262424] w-12 h-12 flex justify-center items-center rounded-3xl">
                <div className="bg-amber-600 w-8 h-8 rounded-3xl flex justify-center items-center text-black font-bold ">
                    P
                </div>
                
            </div>
        </div>
     </div>
    </div>
  )
}

export default Nav