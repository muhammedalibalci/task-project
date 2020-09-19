import React from 'react'

export default function MenuDetail({ menu, extraPrice }) {
    return (
        <div>
            <img
                src={menu.image}
                alt="food"
                width={300}
                height={260}
                style={{ borderRadius: '50px' }} />
            <div className="detail-info">
                <h3 className="detail-title ">
                    {menu.name}
                </h3>
                {menu.price && <p className="detail-title">
                  <span className="tutar"> Fiyat : </span>{menu.price} ₺
                    {extraPrice !== 0 && <span className="title extra-price">
                        +{extraPrice} ₺
                    </span>}
                </p>}
            </div>
        </div>
    )
}
