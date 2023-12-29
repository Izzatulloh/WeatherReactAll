import React from 'react'
import { getTemp, getTime } from '../helper/index.js';
import day from "../assets/images/day.svg";
import temp from "../assets/images/temp.svg";
import davleniya from "../assets/images/davleniya.svg";
import yomgir from "../assets/images/yomgir.svg";
import wind from "../assets/images/wind.svg";
import cloud from "../assets/images/cloud.png";
import Info from './Info.jsx';
import { getImage } from '../images.js';
function Content({current,name,data}) {
    console.log(current);
    return (
        <div className='content'>
            <div className="content__left">
                <h2 className="content__left-temp">{getTemp(current.temp)}°</h2>
                <p className="content__left-text">Today</p>
                <p className="content__left-time">Time: {getTime(data.timezone)}</p>
                <p className="content__left-city">City: {name}</p>
                <div className="content__left-img">
                    <img src={getImage(current.weather[0].description)} alt="" />
                </div>
            </div>
            <div className="content__right">
                <Info text={"Температура"} img={temp} state={`${getTemp(current.temp)}° - ощущается как ${current.feels_like}°`}/>
                <Info text={"Давление "} img={davleniya} state={`${current.pressure} мм ртутного столба - нормальное`}/>
                <Info text={"Осадки"} img={yomgir} state={`${current.humidity}%`}/>
                <Info text={"Ветер"} img={wind} state={`${current.wind_speed} м/с юго-запад - легкий ветер`}/>
                <img className='content__right-cloud' src={cloud} alt="" />
            </div>
        </div>
    )
}

export default Content