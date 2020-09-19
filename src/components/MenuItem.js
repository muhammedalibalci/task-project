import React from 'react'
import '../styles/MenuItem.css'
export default function MenuItem(
    {
        menu,
        onClickMenu,
        visibleButton
    }
) {
    return (
        <div className="card">
            <img
                src={menu.image}
                width={250}
                height={160}
                style={{ borderRadius: '50px' }}
                alt="menu" />
            <div className="inner-container">
                <span className="title" onClick={() => onClickMenu(menu)} >
                   {menu.name}
                </span>
                {menu.price && <span className="price">
                    {menu.price} ₺
                </span>}
                {menu.items && <div className="items-length">
                    <img src="/images/shopping-bag.png" style={{marginRight:'5px'}} alt="bag"/>
                    {menu.items.length} Çeşit Ürün
                </div>}
                {visibleButton && <div className="button-container" >
                    <button onClick={() => onClickMenu(menu)}>
                        {menu.subMenus ? "Ayrıntılara Bak" : "Bu Ürünü Ekle"}
                    </button>
                </div>}
            </div>
        </div>
    )
}
