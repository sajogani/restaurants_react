import React from "react";
// import { CiLocationOn } from 'react-icons/ci'

const Footer = () => {
    return (
        <>
            <footer class=" text-white bg-black">
                <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-8 sm:px-6 lg:px-8">
                    <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-32 lg:gap-4">
                        <div class="mx-auto max-w-sm lg:max-w-none">
                            <span className='text-white block font-bold text-xl'>LOGO</span>
                            <p class="mt-4 text-center duration-500 lg:text-left lg:text-lg text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet
                                aut perferendis distinctio iusto repudiandae, provident velit earum?
                            </p>

                            <div class="mt-6 flex justify-center gap-4 lg:justify-start">
                                <a
                                    class="text-white duration-500 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span class="sr-only"> Facebook </span>

                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>

                                <a
                                    class="text-white transition duration-500 hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span class="sr-only"> Twitter </span>

                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        />
                                    </svg>
                                </a>

                                <a
                                    class="text-white duration-500 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span class="sr-only"> Instagram </span>

                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 xl:gap-8 lg:gap-4 text-center lg:grid-cols-3 lg:text-left md:grid-cols-3 ">
                            <div>
                                <strong class="font-medium text-white dark:text-white"> Restaurant </strong>

                                <ul class="mt-6 space-y-1">
                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            About us
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Reviews
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            FAQ’S
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <strong class="font-medium text-white dark:text-white"> Our Services </strong>

                                <ul class="mt-6 space-y-1">
                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Dinning Service
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Waiter Service
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                            href="#"
                                        >
                                            Assisted Service
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <strong class="font-medium text-white dark:text-white"> Contact Information </strong>

                                <ul class="mt-6 space-y-1">
                                    <li
                                        class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="size-5 shrink-0 not-italic text-white transition hover:text-gray-700/75 cursor-pointer dark:text-white dark:hover:text-white/75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>

                                        <address class="-mt-0.5 flex-1 not-italic text-white transition hover:text-gray-700/75 cursor-pointer dark:text-white dark:hover:text-white/75">
                                            1901 Thornlegd cir. shior, hawali 31063
                                        </address>
                                    </li>

                                    <li
                                        class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="size-5 shrink-0 not-italic text-white transition hover:text-gray-700/75 cursor-pointer dark:text-white dark:hover:text-white/75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>

                                        <address class="-mt-0.5 flex-1 not-italic text-white transition hover:text-gray-700/75 cursor-pointer dark:text-white dark:hover:text-white/75">
                                            12+ Locations
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12 border-t border-gray-100 pt-6 dark:border-white-800">
                        <div class="text-center sm:flex sm:justify-between sm:text-left">
                            <p class="text-sm cursor-pointer text-white duration-500 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                                <span class="block sm:inline">Privacy Policy</span>
                            </p>

                            <p class="mt-4 text-sm sm:order-first sm:mt-0 cursor-pointer text-white duration-500 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                                Teams of service
                            </p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}


export default Footer;
