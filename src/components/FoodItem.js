import React from 'react'
import '../styles/SubMenus.css'
export default function FoodItem({ food, selectFood, title, selectedFood }) {
    return (
        <div>
            {selectedFood &&
                <div className="checked">
                    <img src="/images/checked.png" alt="check" />
                </div>}
            <div className="food-item" onClick={() => selectFood(food, title)}>

                <div className="c-food-image">
                    <img
                        src={food.image}
                        alt="food"
                        className="food-image"
                    />
                </div>
                <div className="food-name">
                    {food.name}
                </div>
                {food.price && <div className="food-price">
                    <span>+{food.price} ₺</span>
                </div>}

            </div>
        </div>
    )
}
