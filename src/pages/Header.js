import React, { useState } from "react"
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <header class="text-white bg-black">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center justify-between">
                        <div class="flex-1 md:flex md:items-center md:gap-12">
                            <a class="block font-normal" href="#">
                                LOGO
                            </a>
                        </div>

                        <div class="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" class="hidden md:block">
                                <ul class="flex items-center gap-6 text-sm">
                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Menu
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Offer
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <div class="flex items-center gap-4">
                                <div class="sm:flex sm:gap-4">
                                    <a
                                        class="text-base text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        <FaSearch />
                                    </a>

                                    <div class="hidden sm:flex">
                                        <a
                                            class="text-base text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            <FaShoppingCart />
                                        </a>
                                    </div>
                                    <div class="hidden sm:flex">
                                        <a
                                            class="text-base text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            <FaUser />
                                        </a>
                                    </div>
                                </div>

                                <div class="block md:hidden">
                                    <button onClick={toggleSidebar}
                                        class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {isSidebarOpen && <Sidebar onClose={closeSidebar} />}

        </div>
    )
}

const Sidebar = () => {
    return (
        <>
            <div className="md:w-64 p-20 bg-gray-200 dark:bg-gray-800 fixed top-0 left-0 h-full overflow-y-auto z-50">
                {/* {/ <h2 className='font-bold mb-2 text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'>LOGO</h2>    /} */}

                <button onClick={onclose} className="absolute text-2xl top-4 right-4">
                    <FaXmark className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                </button>

                <ul className="flex flex-col items-center gap-6 text-sm">
                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">
                            Menu
                        </a>
                    </li>
                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">
                            Offer
                        </a>
                    </li>
                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

        </>
    );
}
export default Header;