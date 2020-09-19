import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SubMenuItem from '../components/SubMenuItem';
import { menus } from '../db/data'
import '../styles/SubMenus.css'
import MenuDetail from '../components/MenuDetail';

export default function SubMenus() {

    const history = useHistory()
    const menu = history.location.state
    const [subMenus, setSubMenus] = useState([])
    const [selectedFoods, setSelectedFoods] = useState([])
    const [extraPrice, setSetExtraPrice] = useState(0)

    useEffect(() => {
        const selectedSubMenus = menu.subMenus.map(m => menus.find(menu => menu.key === m))
        setSubMenus(selectedSubMenus)
    }, [menu.subMenus])

    useEffect(() => {
        checkExtraPrice()
    }, [selectedFoods])

    const selectFood = (food, title) => {
        let hasSameTitle;
        selectedFoods.map(f => f.title === title ? hasSameTitle = true : null)

        if (!hasSameTitle) {
            const data = {
                title,
                food
            }
            setSelectedFoods(selectedFoods.concat(data))
        } else {
            const uptatedFoods = selectedFoods.map(
                f => f.title === title ? { ...f, food }
                    : f)
            setSelectedFoods(uptatedFoods)
        }
    }

    const checkExtraPrice = () => {
        let price = 0
        selectedFoods.map(f => f.food.price && !f.food.caption ? price += f.food.price : null)
        setSetExtraPrice(price)
    }

    return (
        <div className="sub-container">
            { <div style={{ marginTop: '10px' }} onClick={() => history.goBack()}>
                <img src="/images/left-arrow.png" alt="left" width={25} height={25} />
            </div>}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                <MenuDetail
                    menu={menu}
                    extraPrice={extraPrice} />
            </div>
            <div className="warning">
                Her Bölümden Sadece Bir Ürün Seçebilirisiniz.
            </div>
            {
                subMenus.map((subMenu, index) => {
                    return <SubMenuItem
                        key={index}
                        subMenu={subMenu}
                        selectFood={selectFood}
                        selectedFoods={selectedFoods} />
                })
            }

        </div>
    )
}
