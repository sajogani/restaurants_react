import './App.css';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { SiCodechef } from "react-icons/si";
import { PiChefHatFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FaBox } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";  
import { BsBagCheckFill } from "react-icons/bs";

function App() {

  return (
    <div className="App">

      <div className="bg-gray-900 text-white py-4 px-20 flex justify-between items-center">
        {/* Left side logo */}
        <div className="flex items-center">
          <p className="text-2xl font-bold">Logo</p>
        </div>
        {/* Right side icon */}
        <div className="flex items-center">
          <p className='px-3'><FaMagnifyingGlass /></p>
          <p className='px-2'><FaBell /></p>
        </div>
      </div>

      <div className="flex h-screen">

        <div className=" h-full py-6 flex flex-col w-1/6 ">
          <div className="mb-8">
            <ul>
              <li className="mb-2 flex px-6 bg-black items-center h-12 text-white">
                <IoHomeSharp className='mr-4' />
                <a href="#" className=" hover:text-white">Dashboard</a>
              </li>
              <li className="mb-2 flex px-6">
                <SiCodechef className='mr-4' />
                <a href="#" className=" hover:text-white">Chef</a>
              </li>
              <li className="mb-2 flex px-6">
                <PiChefHatFill className='mr-4' />
                <a href="#" className=" hover:text-white">Waiter</a>
              </li>
              <li className="mb-2 flex px-6">
                <FaUserAlt className='mr-4' />
                <a href="#" className=" hover:text-white">Accountant</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-200 p-6 w-5/6">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          <div className="flex justify-around mt-10">

            <div className="w-100 flex">
            <div className="px-4">
                <GiNotebook className='items-center h-16 text-4xl iconcolor'/>
            </div>
            <div className="px-4">
                <h1 className='text-5xl font-bold'>75</h1>
                <p href="#" className=" hover:text-white">Total Order</p>
            </div>
            </div>

            <div className="flex w-100">
            <div className="px-4 text-0A5239">
                <FaBox  className='items-center h-16 text-4xl'/>
            </div>
            <div className="px-4">
                <h1 className='text-5xl font-bold'>357</h1>
                <p href="#" className=" hover:text-white">Total Delivered</p>
            </div>
            </div>

            <div className="flex w-100">
            <div className="px-4">
                <GiCancel className='items-center h-16 text-4xl'/>
            </div>
            <div className="px-4">
                <h1 className='text-5xl font-bold'>65</h1>
                <p href="#" className=" hover:text-white">Total Canceled</p>
            </div>
            </div>
            
            <div className="flex  w-100">
            <div className="px-4">
                <BsBagCheckFill className='items-center h-16 text-4xl'/>
            </div>
            <div className="px-4">
                <h1 className='text-5xl font-bold'>$128</h1>
                <p href="#" className=" hover:text-white">Total Revenue</p>
            </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );

}


export default App;
