import React from 'react'
import Restaurant_card from '../Components/Restaurant_card'
import restaurant_card_1 from "../images/restaurant_card_1.png";
import restaurant_card_2 from "../images/restaurant_card_2.png";
import restaurant_card_3 from "../images/restaurant_card_3.png";
import restaurant_card_4 from "../images/restaurant_card_4.png";
import restaurant_card_5 from "../images/restaurant_card_5.png";
import restaurant_card_6 from "../images/restaurant_card_6.png";
import restaurant_card_7 from "../images/restaurant_card_7.png";
import restaurant_card_8 from "../images/restaurant_card_8.png";
import restaurant_card_9 from "../images/restaurant_card_9.png";

const All_restaurant = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
          <div className="mb-5">
            <p className="lg:text-3xl md:text-2xl text-2xl font-semibold">All Restaurant</p>
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
    </div>
  )
}

export default All_restaurant
