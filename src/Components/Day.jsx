import React from 'react'
import sun from "../assets/images/day.svg";
import { getDay, getMonth, getTemp, getWeek } from '../helper';
import { getImage } from '../images';
function Day({ day }) {
  return (
    <div className='day'>
      <h2 className="day__title">{getWeek(day.dt)}</h2>
      <p className="day__date">{getDay(day.dt)} {getMonth(day.dt)}</p>
      <img src={getImage(day.weather[0].description)} alt="" />
      <p className="day__max">{getTemp(day.temp.max)}°</p>
      <p className="day__min">{getTemp(day.temp.min)}°</p>
      <p className="day__state">{day.weather[0].description}</p>
    </div>
  )
}

export default Day