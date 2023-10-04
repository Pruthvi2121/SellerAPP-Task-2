import React, { useState } from 'react';
import { Card } from './Card';
import { BsArrowRight} from "react-icons/bs";
import { CgSandClock} from "react-icons/cg";
import Data from './Data.json'
import { Link } from 'react-router-dom';
import { tab } from '@testing-library/user-event/dist/tab';
import { useLocation, useNavigate } from "react-router-dom";
export const Home = ()=> {
    const navigate = useNavigate()
    const [tag, setTag] = useState("Mumbai")
    const [cardCount, setCardCount] = useState(3)
    
    const ShowMore = ()=>{
      setCardCount(prev => prev + 3)
    }
  return (
    <div className='mt-4 min-h-screen w-full md:w-11/12 xl:w-9/12 mx-auto '>
      <div className='w-1/2 mx-auto  text-gray-800 font-bold'>
      <h1 className='text-4xl text-center'>Featured Listed Property</h1>
      <p className='text-sm mx-2 text-center'> Real estate can be bought , sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be...</p>
      </div>

    <div className='w-full flex my-2 mt-10 gap-2'>
      
      {
        Data.tags.map((item)=>(
         <button key={item} className={tag===item?"bg-[#3639E3] text-white px-6 py-2 rounded-full font-semibold ":"bg-[#EBEBFB] px-6 py-2 rounded-full font-semibold text-gray-600" }  
          onClick={() => {
          setTag(item);
        setCardCount(3);
        }}  >
          {item}</button>
        ))
      }
      
    
      <button className='border-[#3639E3] border px-6 py-2 ml-auto mr-2 rounded-full font-bold text-[#3639E3] flex item-center justify-center gap-2'>View All  <BsArrowRight className='my-auto text-lg'/> </button>
    </div>

    <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4 mt-4 mx-auto w-full '>

        {
            // Data.properties.map((item,i)=>(
            //     <Link to={`property/${item.id}`}><Card key={i} data={item} /></Link>
                
            // ))

            Data.properties.filter((item)=>{
              return item.tag.toLowerCase().includes(tag.toLowerCase())
            }).slice(0,cardCount)
            .map((item, i)=>(
                <div key={i} onClick={()=>{navigate(`property/${item.id}`, { state:{item} })}}>
                <Card data={item} />
                </div>
            )) 
        }
          
    </div>
    <div className='mx-auto w-full flex my-4'>
      <button className='bg-[#3639E3] px-6 py-2 rounded-full font-semibold text-white mx-auto flex items-center gap-2  hover:bg-[#3639e3af] duration-300 group' onClick={ShowMore}><CgSandClock className='text-lg duration-300 group-hover:animate-bounce'/>  Show More</button>
    </div>
        
    
    </div>
  );
}

