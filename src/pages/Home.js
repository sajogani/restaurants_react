import React from "react";
import burger from "../images/burger.png";
import pizza from "../images/pizza.png";
import dosa from "../images/dosa.png";
import shake from "../images/shake.png";
import Restaurant_card from "../Components/Restaurant_card";
import restaurant_card_1 from "../images/restaurant_card_1.png";
import restaurant_card_2 from "../images/restaurant_card_2.png";
import restaurant_card_3 from "../images/restaurant_card_3.png";
import restaurant_card_4 from "../images/restaurant_card_4.png";
import restaurant_card_5 from "../images/restaurant_card_5.png";
import restaurant_card_6 from "../images/restaurant_card_6.png";
import restaurant_card_7 from "../images/restaurant_card_7.png";
import restaurant_card_8 from "../images/restaurant_card_8.png";
import restaurant_card_9 from "../images/restaurant_card_9.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        <div className="Book_table_bg">
          <div className="bg-slate-950 bg-opacity-50 h-lvh flex justify-center items-center px-10">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="Book_table_data">
                <p className="text-2xl font-serif text-white text-start font-medium me-5 mb-2 mix-w-[426px] md:text-4xl">
                  For the love of
                </p>
                <p className="text-2xl font-serif text-white text-end font-medium mb-10 ms-10 mix-w-[426px] md:text-4xl">
                  Delicious food.
                </p>
                <button className="lg:px-[48px] md:px-[44px] px-[30px] py-1 border-2 text-white border border-spacing-1 hover:bg-white hover:text-black duration-300 lg:text-2xl md:text-2xl sm:text-1xl">
                  Book Your Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-[25px]">
          <h2 className="font-bold text-1xl mb-5 mix-w-[426px] md:text-2xl">
            What Would you link to?
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="flex justify-center">
              <a href="#" className="w-48 my-4 mx-2">
                <img src={pizza} alt="pizza" />
                <p className="text-center text-[20px] font-medium">Pizza</p>
              </a>
            </div>
            <div className="flex justify-center">
              <a href="#" className="w-48 my-4 mx-2">
                <img src={burger} alt="burger" />
                <p className="text-center text-[20px] font-medium">Burger</p>
              </a>
            </div>
            <div className="flex justify-center">
              <a href="#" className="w-48 my-4 mx-2">
                <img src={dosa} alt="dosa" />
                <p className="text-center text-[20px] font-medium">Dosa</p>
              </a>
            </div>
            <div className="flex justify-center">
              <a href="#" className="w-48 my-4 mx-2">
                <img src={shake} alt="shake" />
                <p className="text-center text-[20px] font-medium">Shake</p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <button className="my-7 border-2 border-gray-950 px-5 py-1 text-1xl hover:bg-black hover:text-white duration-300 mix-w-[426px] md:text-2xl">
              View More
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="Try_Something_bg">
          <div className=" bg-slate-950 bg-opacity-50 min-h-full">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="pt-10">
                <div className="Book_table_data">
                  <p className="text-2xl text-white mb-1 ms-1 mix-w-[426px] md:text-4xl">
                    Try Something
                  </p>
                  <p className="text-2xl text-white mb-2 mix-w-[426px] md:text-4xl">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;Delicious.....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
          <div className="flex justify-between mb-5">
            <p className="lg:text-4xl md:text-3xl sm:text-2xl font-semibold">Restaurant</p>
            <div className="flex items-center">
              <Link to="/all_restaurant" className="font-semibold">
                View all
              </Link>
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <Restaurant_card
              card_img={restaurant_card_1}
              Restaurant_name="Om Restaurant"
              Restaurant_rating="3.7"
              special_dish_name="North Indian, South Indian, Chinese, Fast Food"
              district_name="Bhestan, Surat"
            />
            <Restaurant_card
              card_img={restaurant_card_2}
              Restaurant_name="La Festa"
              Restaurant_rating="4.2"
              special_dish_name="Chinese, Fast Food, Pizza"
              district_name="Vesu, Surat"
            />
            <Restaurant_card
              card_img={restaurant_card_3}
              Restaurant_name="Avadh Restaurant"
              Restaurant_rating="4.4"
              special_dish_name="North Indian, Biryani, Salad, Continental Desserts"
              district_name="Varachha, Surat"
            />
            <Restaurant_card
              card_img={restaurant_card_4}
              Restaurant_name="Harikrushna Restaurant"
              Restaurant_rating="4.0"
              special_dish_name="North Indian, Gujarati"
              district_name="Katargam, Surat"
            />
            <Restaurant_card
              card_img={restaurant_card_5}
              Restaurant_name="Vishala Restaurant"
              Restaurant_rating="3.5"
              special_dish_name="North Indian Kathiyawadi"
              district_name="Pal Gam, Surat"
            />
            <Restaurant_card
              card_img={restaurant_card_6}
              Restaurant_name="Coffee Culture"
              Restaurant_rating="4.1"
              special_dish_name="Cafe, Coffee, North Indian, Chinese, Fast Food"
              district_name="Vesu, Surat"
            />
            <Restaurant_card
              card_img={restaurant_card_7}
              Restaurant_name="Gateway Restaurant"
              Restaurant_rating="3.6"
              special_dish_name="North Indian, Biryani, Desserts, Shake, Beverages"
              district_name="Sarthana, Surat"
            />
            <Restaurant_card
              card_img={restaurant_card_8}
              Restaurant_name="Darshan Restaurant"
              Restaurant_rating="4.0"
              special_dish_name="Chinese"
              district_name="Kapodra, Surat"
            />
            <Restaurant_card
              card_img={restaurant_card_9}
              Restaurant_name="Prasang Dhosa"
              Restaurant_rating="3.1"
              special_dish_name="South Indian"
              district_name="Nana Varachha, Surat "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
