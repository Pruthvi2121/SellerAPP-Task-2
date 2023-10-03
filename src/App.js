import logo from './logo.svg';
import './App.css';
import { Card } from './Components/Card';
import { BsArrowRight} from "react-icons/bs";
import { CgSandClock} from "react-icons/cg";


function App() {
  return (
    <div className='mt-4 min-h-screen w-full md:w-11/12 xl:w-9/12 mx-auto '>
      <div className='w-1/2 mx-auto  text-gray-800 font-bold'>
      <h1 className='text-4xl text-center'>Featured Listed Property</h1>
      <p className='text-sm mx-2 text-center'> Real estate can be bought , sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be...</p>
      </div>

    <div className='w-full flex my-2 mt-10 gap-2'>
      
      <button className='bg-[#EBEBFB] px-6 py-2 rounded-full font-semibold text-gray-600'>New York</button>
      <button className='bg-[#EBEBFB] px-6 py-2 rounded-full font-semibold text-gray-600'>Mumbai</button>
      <button className='bg-[#EBEBFB] px-6 py-2 rounded-full font-semibold text-gray-600'>Paris</button>
      <button className='bg-[#3639E3] px-6 py-2 rounded-full font-semibold text-white'>London</button>
      <button className='border-[#3639E3] border px-6 py-2 ml-auto mr-2 rounded-full font-bold text-[#3639E3] flex item-center justify-center gap-2'>View All  <BsArrowRight className='my-auto text-lg'/> </button>
    </div>
    <div className='grid grid-cols-3  gap-4 mt-4 mx-auto w-full '>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          
    </div>
    <div className='mx-auto w-full flex my-4'>
      <button className='bg-[#3639E3] px-6 py-2 rounded-full font-semibold text-white mx-auto flex items-center gap-2 hover:bg-[#3639e3af] duration-300'><CgSandClock className='text-lg'/>  Show More</button>
    </div>
   
    
    </div>
  );
}

export default App;
