import React from "react";
import { FaStar } from "react-icons/fa";

const Restaurant_card = (props) => {
  return (
    <a href="#" className="flex justify-center">
      <div class="max-w-sm bg-white rounded-lg shadow">
        <a href="#">
          <img class="rounded-t-lg" src={props.card_img} alt="" />
        </a>
        <div class="p-5">
          <div className="flex justify-between items-center">
            <h5 class="mb-2 lg:text-2xl md:text-2xl sm:text-1xl font-medium tracking-tight text-gray-900">
              {props.Restaurant_name}
            </h5>
            <div className="">
              <span className="px-1 rounded-md items-center text-white flex bg-[#148749]">
                {props.Restaurant_rating} <FaStar />
              </span>
            </div>
          </div>
          <p class="mb-3 sm:text-1xl font-normal text-gray-700 h-9">
            {props.special_dish_name}
          </p>
          <p class="mb-3 sm:text-1xl font-normal text-gray-700">{props.district_name}</p>
        </div>
      </div>
    </a>
  );
};

export default Restaurant_card;
