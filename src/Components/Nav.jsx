import React, { useContext, useEffect, useState } from 'react'
import logo from "../assets/images/logo.svg";
import night from "../assets/images/night.svg";
import day from "../assets/images/day.svg";
import { Context } from '../Context/Context';
function Nav() {
    const [theme, setTheme] = useState(getTheme)
    const { setCity, city, search } = useContext(Context)
    function getTheme() {
        return localStorage.getItem('tema')
    }
    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('tema', theme)
    }, [theme])
    const changeTheme = (e) => {
        e.preventDefault()
        setTheme(theme == "light" ? 'dark' : 'light')
    }
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__box">
                    <a href="#!" className="nav__logo">
                        <img src={logo} alt="" />
                        Weather
                    </a>
                    <div className="nav__block">
                        <button className="nav__button" onClick={changeTheme}>
                            {theme == "light"
                                ? <img src={day} alt="" />
                                : <img src={night} alt="" />
                            }
                        </button>
                        <form onSubmit={(e) => search(e)}>
                            <input className='nav__input' type="text" placeholder='Выбрать город' value={city} onChange={(e) => setCity(e.target.value)} />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav