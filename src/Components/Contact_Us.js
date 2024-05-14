import React, { useEffect, useState } from "react";
import image1 from "../images/image 1.png";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

const Contact_Us = () => {

    const [mapSrc, setMapSrc] = useState('');

    useEffect(() => {
        const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.18800973857!2d72.65748305932298!3d21.15912035464476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715678471437!5m2!1sen!2sin";
        setMapSrc(mapUrl);
      }, []);
  return (
    <>
      <section>
        <div style={{ position: "relative" }}>
          <img src={image1} alt="" className="h-[400px] w-[100%] object-fill" />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1
              className="text-5xl mb-3"
              style={{ color: "white", textAlign: "center" }}
            >
              About Us
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>Home/About Us</p>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 ">
            <div className="rounded-lg bg-white p-8 lg:w-3/5 md:w-3/5 lg:col-span-3 lg:p-12 mx-auto">
              <form action="#" className="space-y-4">
                <p className="text-center text-3xl font-medium mb-5">
                  Keep In Touch
                </p>
                <div>
                  <label className="sr-only " htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full border border-gray-900 p-3 py-2 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded border border-gray-900 p-3 py-2 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded border border-gray-900 p-3 py-2 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded border border-gray-900 p-3 py-2 text-sm"
                    placeholder="Message"
                    rows="4"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4 text-center">
                  <button
                    type="submit"
                    className="inline-block w-full bg-black px-5 py-2 border font-medium text-white sm:w-auto hover:bg-white hover:text-black hover:border-black duration-300"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto mb-10 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-3">
            <div className="flex flex-col items-center">
              <IoCall className="text-5xl mb-5" />
              <p className="py-5 font-medium text-zinc-500">+1 1234567890</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLocationArrow className="text-5xl mb-5" />
              <p className="pt-5 font-medium text-zinc-500">1901 Thornlegd cir. shior,</p>
              <p className="pb-5 font-medium text-zinc-500">hawali 31063</p>
            </div>
            <div className="flex flex-col items-center">
              <MdEmail className="text-5xl mb-5" />
              <p className="py-5 font-medium text-zinc-500">info123@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <section>
      <iframe
      src={mapSrc}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
      </section>
    </>
  );
};

export default Contact_Us;
