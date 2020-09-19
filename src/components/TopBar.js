import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Main.css'
export default function TopBar() {
    const history = useHistory()
    return (
        <nav>
            <div className="top-bar">
                <div onClick={() => history.push('home')}>
                    <img src="/images/home.png" alt="home" />
                </div>
                <div className="top-bar-title">
                    <img src="/images/fork.png"
                        width={16}
                        height={16}
                        alt="logo" />
                    <span>Food Delivery</span>
                </div>
                <div>
                </div>
            </div>
        </nav>
    )
}
