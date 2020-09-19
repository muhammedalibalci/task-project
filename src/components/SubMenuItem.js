import React from 'react'
import FoodItem from './FoodItem'
import '../styles/SubMenus.css'
export default function SubMenuItem({ subMenu, selectFood, selectedFoods }) {
    return (
        <div className="submenu-container">
            <div className="sub-desc">
                <h4>
                    {subMenu.description}
                </h4>
                    <img src="/images/right-arrow.png"  />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                {
                    subMenu.items.map((food, index) => {
                        return <FoodItem
                            key={index}
                            title={subMenu.description}
                            selectFood={selectFood}
                            food={food}
                            selectedFood={selectedFoods.some(f => f.food.name === food.name && subMenu.description === f.title)}
                        />
                    })
                }
            </div>
        </div>
    )
}
