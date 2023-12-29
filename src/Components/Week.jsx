import React, { useContext } from 'react'

import Day from './Day'
const dayArr = [
    { id: 1, name: "Monday", date: "28 авг", max: 18, min: 15, state: "Облачно" },
    { id: 2, name: "Monday", date: "28 авг", max: 18, min: 15, state: "Облачно" },
    { id: 3, name: "Monday", date: "28 авг", max: 18, min: 15, state: "Облачно" },
    { id: 4, name: "Monday", date: "28 авг", max: 18, min: 15, state: "Облачно" },
    { id: 5, name: "Monday", date: "28 авг", max: 18, min: 15, state: "Облачно" },
    { id: 6, name: "Monday", date: "28 авг", max: 18, min: 15, state: "Облачно" },
    { id: 7, name: "Monday", date: "28 авг", max: 18, min: 15, state: "Облачно" },
]
function Week({ daily }) {
    return (
        <div className="week">
            {
                daily.slice(0,7).map((day) => <Day key={day.dt} day={day} />)
            }
        </div>
    )
}

export default Week