import React, { useState, useEffect } from "react";
// import Review1 from "../image/Mask Group.jpg";
// import Review2 from "../image/Mask Group.png";
// import people1 from "../image/avatar (2).png";
// import people2 from "../image/avatar.png";
// import people3 from "../image/avatar (1).png";

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
import { CircularProgressbar } from 'react-circular-progressbar';
import { FaRegSquare } from "react-icons/fa";
import { GrSquare } from "react-icons/gr";
import { TfiDownload } from "react-icons/tfi";
import { BiSolidStar } from "react-icons/bi";

import 'react-circular-progressbar/dist/styles.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function App() {

  const [percentages, setPercentages] = useState({});

  useEffect(() => {
    // Simulating loading data from an API or any asynchronous operation
    const fetchData = () => {
      setTimeout(() => {
        setPercentages({ red: 81, green: 22, blue: 62 });
      }, 1000); // Adjust the delay time as needed
    };

    fetchData();
  }, []);

  const data = [
    { name: 'Sunday', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Monday', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Tuesday', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Wednesday', uv: 1500, pv: 3908, amt: 2000 },
    { name: 'Thursday', uv: 4000, pv: 4800, amt: 2181 },
    { name: 'Friday', uv: 1500, pv: 3800, amt: 2500 },
    { name: 'Saturday', uv: 3500, pv: 4300, amt: 2100 },
  ];


  // const Chart = () => {
  //   let [data, setdata] = useState(200);
  //   let [getdata, setget] = useState(200);
  //   let [oppocard, setoppocard] = useState(true);
  //   let [oppocardrow, setoppocardrow] = useState(true);
  //   let [card, setcard] = useState(true);
  // }
  return (

    <>

      <div className="bg-gray-900 text-white py-4 px-20 flex justify-between items-center ">
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

      <div className="h-screen">
        <div className="flex">
          <div className="py-6 flex flex-col w-1/6 h-screen">
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

          <div className="p-6 w-5/6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            <div className="flex justify-around mt-10">

              <div className="w-100 flex">
                <div className="px-4">
                  <GiNotebook className='items-center h-16 text-4xl iconcolor' />
                </div>
                <div className="px-4">
                  <h1 className='text-5xl font-bold'>75</h1>
                  <a href="#" className=" hover:text-white">Total Order</a>
                </div>
              </div>

              <div className="flex w-100">
                <div className="px-4 text-0A5239">
                  <FaBox className='items-center h-16 text-4xl iconcolor' />
                </div>
                <div className="px-4">
                  <h1 className='text-5xl font-bold'>357</h1>
                  <a href="#" className=" hover:text-white">Total Delivered</a>
                </div>
              </div>

              <div className="flex w-100">
                <div className="px-4">
                  <GiCancel className='items-center h-16 text-4xl iconcolor' />
                </div>
                <div className="px-4">
                  <h1 className='text-5xl font-bold'>65</h1>
                  <a href="#" className=" hover:text-white">Total Canceled</a>
                </div>
              </div>

              <div className="flex  w-100">
                <div className="px-4">
                  <BsBagCheckFill className='items-center h-16 text-4xl iconcolor' />
                </div>
                <div className="px-4">
                  <h1 className='text-5xl font-bold'>$128</h1>
                  <a href="#" className=" hover:text-white">Total Revenue</a>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-10">

              <div className="w-1/2 p-4">

                <div className=" py-4 px-20 flex justify-between items-center ">
                  {/* Left side logo */}
                  <div className="flex items-center">
                    <p className="text-2xl font-bold">Pie Chart</p>
                  </div>
                  {/* Right side icon */}
                  <div className="flex items-center">
                    <p className='px-3 flex items-center'><FaRegSquare className="text-xs font-bold mr-3" />Chart</p>
                    <p className='px-2 flex items-center'><GrSquare className="text-xs font-bold mr-3 text-red-600" />Show Value</p>
                  </div>
                </div>
                <div className="flex justify-around my-4">
                  <div className="text-center">
                    <div className="h-32 justify-center items-center w-32">
                      <CircularProgressbar
                        value={percentages.red || 0}
                        text={`${percentages.red || 0}%`}
                        strokeWidth={22}
                        styles={{ path: { stroke: "#ff0000" } }}
                      />
                      <p className="text-xs my-3">Total Order</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="h-32 justify-center items-center w-32">
                      <CircularProgressbar
                        value={percentages.green || 0}
                        text={`${percentages.green || 0}%`}
                        strokeWidth={22}
                        styles={{ path: { stroke: "#00ff00" } }}
                      />
                      <p className="text-xs my-3">Customer Growth</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="h-32 justify-center items-center  w-32">
                      <CircularProgressbar
                        value={percentages.blue || 0}
                        text={`${percentages.blue || 0}%`}
                        strokeWidth={22}
                        styles={{ path: { stroke: "#0000ff" } }}
                      />
                      <p className="text-xs my-3">Total Revenue</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="w-1/2 p-4">
                <div className=" py-4 flex justify-between items-center ">
                  {/* Left side logo */}
                  <div className=" items-center">
                    <p className="text-2xl font-bold">Chart Order</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                  </div>
                  {/* Right side icon */}
                  <div className="items-center">
                    <button className="bg-transparent hover:bg-blue-700 border border-blue-500 font-bold py-2 px-4 rounded flex bluetext">
                      <TfiDownload className="mr-3" />
                      Save Report
                    </button>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2D9CDB" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />

                    {/* <YAxis /> */}
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stackId="0" stroke="#2D9CDB" fill="url(#colorUv)" />
                  </AreaChart>
                </ResponsiveContainer>

              </div>


            </div>

            {/* <div className=" justify-between mt-10">
              <h1 className="text-2xl font-bold mb-4">Customer Review</h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 swiper-wrapper">
                <Swiper
                  loop={true}
                  spaceBetween={30}
                  speed={500}
                  autoplay={{ delay: 4000, disableOnInteraction: false }} 
                  slidesPerView={3}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="bg-white rounded-lg shadow-md flex items-center p-4">
                        <div className="flex-1">
                          <div className="flex">
                            <div>
                              <img src={people1} alt="" />
                            </div>
                            <div className="px-3">
                              <p>Jons Sena</p>
                              <p className="text-gray-400 text-xs">2 days ago</p>
                            </div>
                          </div>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                          <div className="flex">
                            <BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="text-gray-500" />
                            <p className="text-black pl-1">4.5</p>
                          </div>
                        </div>
                        <div className="flex justify-end items-center">
                          <img src={Review2} alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="bg-white rounded-lg shadow-md flex items-center p-4">
                        <div className="flex-1">
                          <div className="flex">
                            <div>
                              <img src={people2} alt="" />
                            </div>
                            <div className="px-3">
                              <p >Sofia</p>
                              <p className="text-gray-400 text-xs">2 days ago</p>
                            </div>
                          </div>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                          <div className="flex">
                            <BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="text-gray-500" /><BiSolidStar className="text-gray-500" />
                            <p className="text-black pl-1">4.5</p>
                          </div>
                        </div>
                        <div className="flex justify-end items-center">
                          <img src={Review1} alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="bg-white rounded-lg shadow-md flex items-center p-4">
                        <div className="flex-1">
                          <div className="flex">
                            <div>
                              <img src={people3} alt="" />
                            </div>
                            <div className="px-3">
                              <p>Anandreansyah</p>
                              <p className="text-gray-400 text-xs">2 days ago</p>
                            </div>
                          </div>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                          <div className="flex ">
                            <BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="text-gray-500" />
                            <p className="text-black pl-1">4.5</p>
                          </div>
                        </div>
                        <div className="flex justify-end items-center">
                          <img src={Review2} alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>


                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="bg-white rounded-lg shadow-md flex items-center p-4">
                        <div className="flex-1">
                          <div className="flex">
                            <div>
                              <img src={people1} alt="" />
                            </div>
                            <div className="px-3">
                              <p>Jons Sena</p>
                              <p className="text-gray-400 text-xs">2 days ago</p>
                            </div>
                          </div>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                          <div className="flex">
                            <BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="text-gray-500" />
                            <p className="text-black pl-1">4.5</p>
                          </div>
                        </div>
                        <div className="flex justify-end items-center">
                          <img src={Review2} alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="bg-white rounded-lg shadow-md flex items-center p-4">
                        <div className="flex-1">
                          <div className="flex">
                            <div>
                              <img src={people2} alt="" />
                            </div>
                            <div className="px-3">
                              <p >Sofia</p>
                              <p className="text-gray-400 text-xs">2 days ago</p>
                            </div>
                          </div>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                          <div className="flex">
                            <BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="text-gray-500" /><BiSolidStar className="text-gray-500" />
                            <p className="text-black pl-1">4.5</p>
                          </div>
                        </div>
                        <div className="flex justify-end items-center">
                          <img src={Review1} alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="bg-white rounded-lg shadow-md flex items-center p-4">
                        <div className="flex-1">
                          <div className="flex">
                            <div>
                              <img src={people3} alt="" />
                            </div>
                            <div className="px-3">
                              <p>Anandreansyah</p>
                              <p className="text-gray-400 text-xs">2 days ago</p>
                            </div>
                          </div>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                          <div className="flex ">
                            <BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="starcolor" /><BiSolidStar className="text-gray-500" />
                            <p className="text-black pl-1">4.5</p>
                          </div>
                        </div>
                        <div className="flex justify-end items-center">
                          <img src={Review2} alt="" />
                        </div>
                      </div>
                    </div>

                  </SwiperSlide>

                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </Swiper>
                
              </div>

            </div> */}

          </div>


        </div>
      </div>

    </>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter> 
  );
}