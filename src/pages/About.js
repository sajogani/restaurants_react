import React, { useState } from "react";
import About1 from "../images/About1.png";
import About2 from "../images/About2.png";
import About3 from "../images/About3.png";
import About4 from "../images/About4.png";
const About = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const [currentImage, setCurrentImage] = useState(About3);
    const [currentText, setCurrentText] = useState("");

    const handleTextClick = (newImage, newText) => {
        setCurrentImage(newImage);
        setCurrentText(newText);
    };
    return (
        <>
            <div style={{ position: "relative" }}>
                <img src={About1} alt="" className="h-[400px] w-[100%] object-fill" />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <h1 style={{ color: "white", textAlign: "center" }}>About Us</h1>
                    <p style={{ color: "white", textAlign: "center" }}>Home/About Us</p>
                </div>
            </div>
            <div className="py-7 px-10">
                <div className="text-center">
                    <p className="text-sm font-normal">Tasty & Delicious</p>
                    <h1 className="text-2xl">Our Story</h1>
                    <p className="text-[#7D7D7D] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sedolorm reminusto
                        doeiusmod tempor incidition ulla mco laboris<br></br> nisi ut aliquip ex ea commo
                        condorico consectetur adipiscing elitut aliquip.</p>
                </div>
                <div className="flex justify-center gap-10 pt-5">
                    <div className="w-72">
                        <img src={About2} alt="" className="h-[150px] w-[100%] object-fill" />
                        <div className="pt-2">
                            <p className="text-sm font-medium">Spain Appetizer</p>
                            <p className="text-[#7D7D7D] text-sm">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque
                                laudantium, totam rem aperiam per spiciatis unde omnis iste natus.
                            </p>
                            {showFullText ? (
                                <>
                                    <p className="text-[#7D7D7D] text-sm">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque
                                        laudantium, totam rem aperiam per spiciatis unde omnis iste natus.
                                    </p>
                                    <p onClick={toggleText} className="text-sm cursor-pointer">Show Less</p>
                                </>
                            ) : (
                                <>
                                    <p className="text-[#7D7D7D] text-sm truncate">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque
                                        laudantium, totam rem aperiam per spiciatis unde omnis iste natus.
                                    </p>
                                    <p onClick={toggleText} className="text-sm cursor-pointer underline font-medium">Read More</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="w-72">
                        <img src={About2} alt="" className="h-[150px] w-[100%] object-fill" />
                        <div className="pt-2">
                            <p className="text-sm font-medium">Spain Appetizer</p>
                            <p className="text-[#7D7D7D] text-sm">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque
                                laudantium, totam rem aperiam per spiciatis unde omnis iste natus.
                            </p>
                            {showFullText ? (
                                <>
                                    <p className="text-[#7D7D7D] text-sm">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque
                                        laudantium, totam rem aperiam per spiciatis unde omnis iste natus.
                                    </p>
                                    <p onClick={toggleText} className="text-sm cursor-pointer">Show Less</p>
                                </>
                            ) : (
                                <>
                                    <p className="text-[#7D7D7D] text-sm truncate">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque
                                        laudantium, totam rem aperiam per spiciatis unde omnis iste natus.
                                    </p>
                                    <p onClick={toggleText} className="text-sm cursor-pointer underline font-medium">Read More</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="w-72">
                        <img src={About2} alt="" className="h-[150px] w-[100%] object-fill" />
                        <div className="pt-2">
                            <p className="text-sm font-medium">Spain Appetizer</p>
                            <p className="text-[#7D7D7D] text-sm">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque
                                laudantium, totam rem aperiam per spiciatis unde omnis iste natus.
                            </p>
                            {showFullText ? (
                                <>
                                    <p className="text-[#7D7D7D] text-sm">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque
                                        laudantium, totam rem aperiam per spiciatis unde omnis iste natus.
                                    </p>
                                    <p onClick={toggleText} className="text-sm cursor-pointer">Show Less</p>
                                </>
                            ) : (
                                <>
                                    <p className="text-[#7D7D7D] text-sm truncate">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque
                                        laudantium, totam rem aperiam per spiciatis unde omnis iste natus.
                                    </p>
                                    <p onClick={toggleText} className="text-sm cursor-pointer underline font-medium">Read More</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div className="text-center pt-12">
                        <p className="text-sm font-normal">Tasty & Crunchy</p>
                        <h1 className="text-2xl">Our Specialties</h1>
                        <p className="text-[#7D7D7D] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sedolorm reminusto
                            doeiusmod tempor incidition ulla mco laboris<br></br> nisi ut aliquip ex ea commo
                            condorico consectetur adipiscing elitut aliquip.</p>
                    </div>
                    <div className="flex justify-center  gap-40 pt-10">
                        <div className="96">
                            <div className="flex">
                                <img src={image68} alt="" className=" object-fill w-40" />
                                <img src={image69} alt="" className=" object-fill w-40" />
                            </div>
                        </div>
                        <div className="w">
                            <div className="flex gap-10">
                                <p className="text-sm font-medium">Starter</p>
                                <p className="text-sm font-medium">Mains</p>
                                <p className="text-sm font-medium">Desserts</p>
                            </div>
                            <p className="text-[#7D7D7D] text-sm pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>sed do eiusmod tempor incididunt labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis <br></br> nostu exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat quis nostu exercitation ullamco enim.</p>
                        </div>
                    </div>
                </div> */}
                <div className="flex justify-center gap-40 pt-10">
                    <div className="w-96">
                        <div className="flex">
                            <img src={currentImage} alt="" className="object-fill w-40" />
                            <img src={currentImage} alt="" className="object-fill w-40" />
                        </div>
                    </div>
                    <div className="w">
                        <div className="flex gap-10">
                            <p className="text-sm font-medium cursor-pointer hover:underline" onClick={() => handleTextClick(About3, "")}>Starter</p>
                            <p className="text-sm font-medium cursor-pointer hover:underline" onClick={() => handleTextClick(About4, "rehhhhhhhhhhhhhhh")}>Mains</p>
                            <p className="text-sm font-medium cursor-pointer hover:underline" onClick={() => handleTextClick(About3, "herererererererererererererererererer")}>Desserts</p>
                        </div>
                        <p className="text-[#7D7D7D] text-sm pt-5">{currentText}Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt labore
                            et dolore magna aliqua. Ut enim ad minim veniam,<br></br> quis nostu exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat quis nostu exercitation ullamco enim.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About


