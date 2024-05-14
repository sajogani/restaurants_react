import React from 'react'
import om_restaurant from '../images/om_restaurant.png'
import om_food1 from '../images/om_food1.png'
import om_food2 from '../images/om_food2.png'
import om_food3 from '../images/om_food3.png'

const Om_restaurant = () => {
    return (
        <div>
            <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-8 sm:px-6 lg:px-8">
                {/* <div class="grid-cols-3">
                    
                  
                    
                    
                </div> */}
                <div class="grid grid-rows-2 grid-flow-col gap-4">
                    <div class="row-span-2">
                        <img src={om_restaurant} />
                    </div>
                    <div class=" row-span-1">
                        <img src={om_food1} />
                    </div><div className=" row-span-1">
                        <img src={om_food2} />
                        </div>
                    <div class="row-span-2">
                        <img class="w-[110px] h-[222px]" src={om_food3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Om_restaurant
