import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MenuItem from '../components/MenuItem.js'
import { menus } from '../db/data.js'
import '../styles/Main.css'
export default function Home() {

  const [mainMenus, setMainMenus] = useState([])
  const [visibleLeftArrow, setVisibleLeftArrow] = useState(false)
  const [menuName, setMenuName] = useState('')
  const [visibleButton, setVisibleButton] = useState(false)
  const history = useHistory()

  useEffect(() => {
    parseData()
  }, [])

  const parseData = () => {
    menus.map(menu => menu.key === "main" ? setMainMenus([...menu.items]) : null)
  }

  const onClickMenu = (menu) => {
    if (menu.subMenus) {
      history.push('sub-menus', menu)
    } else {
      menu.items && setMainMenus([...menu.items])
      setVisibleLeftArrow(true)
      setMenuName(menu.name)
      setVisibleButton(true)
      if (!menu.items) {
        alert("Ürün Eklendi")
        window.location.reload()
      }
    }
  }

  const onClickLeftArrow = () => {
    parseData()
    setVisibleLeftArrow(!visibleLeftArrow)
    setVisibleButton(false)
  }
  return (
    <div className="container">
      {visibleLeftArrow && <div className="top-home">
        <img
          src="/images/left-arrow.png"
          alt="left"
          width={25}
          height={25}
          onClick={onClickLeftArrow} />
        <div className="h-title">{menuName}</div>
        <div style={{ width: '125px' }} />
      </div>}
      <div className="card-container">
        {mainMenus.map((menu, index) => {
          return <MenuItem
            key={index}
            menu={menu}
            visibleButton={visibleButton}
            onClickMenu={onClickMenu}
          />
        })}
      </div>
    </div>
  )
}
