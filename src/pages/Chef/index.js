import React, { useState, useEffect } from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaUserAlt } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';
import { PiChefHatFill } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SiCodechef } from 'react-icons/si';
import About4 from "../../images/About4.png"


const UserList = () => {
    const [data, setData] = useState([
        {
            src: ("../../images/About4.png"),
            dob: "1990-01-01",
            name: "John",
            active: true,
            joinedDate: "2020-01-01",
            email: "ab@gmail.com",
            category: "Mexican Chef"
        },
        // Add more user data objects as needed
    ]);
    const addUser = () => {
        const newUser = {
            src: ("../../images/About4.png"),
            dob: "1995-05-05",
            name: "Jane",
            active: false,
            joinedDate: "2019-05-05",
            email: "janedoe@gmail.com",
            category: "Italian Chef"
        };
        setData([...data, newUser]);
    };


    return (

        <>
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
                        <div className='flex justify-between px-5'>
                            <div>
                                <h1 className="text-2xl font-bold mb-4">Chef List</h1>
                            </div>
                            <div>
                                <button onClick={addUser} className='bg-[#1097FA] text-white py-1 px-3'>+ Add Chef</button>
                            </div>
                        </div>
                        <table className='w-[100%]'>
                            <thead className='bg-black text-white font-normal'>
                                <tr>
                                    <th className="text-center font_weight text-sm py-3">No.</th>
                                    <th className='text-center font_weight text-sm'>Image</th>
                                    <th className="text-center font_weight text-sm">Joined Date</th>
                                    <th className="text-center font_weight text-sm">Name</th>
                                    <th className="text-center font_weight text-sm">Eamil id</th>
                                    <th className="text-center font_weight text-sm">Category</th>
                                    <th className="text-center font_weight text-sm">Status</th>
                                    <th className="text-center font_weight text-sm">Edit</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr className='border_b' key={index}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center flex justify-center">
                                            <img src={About4} alt="" className="w-10 h-10 rounded-full" />
                                        </td>
                                        <td className="text-center">{row.joinedDate}</td>
                                        <td className="text-center">{row.name}</td>
                                        <td className="text-center">{row.email}</td>
                                        <td className="text-center">{row.category}</td>
                                        <td className="text-center">{row.active ? "Active" : "Block"}</td>
                                        <td className="text-center">
                                            <button className='text-green-700 px-1'><CiEdit /></button>
                                            <button className='text-red-700'><RiDeleteBin6Line /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    );
};


export default UserList;
