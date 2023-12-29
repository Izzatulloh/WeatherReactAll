import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
const Context = createContext()
const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY
function ContextProvider({ children }) {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)
  async function getWeather(city) {
    {
      try {
        const res1 = await axios.get(`${API_URL}/geo/1.0/direct?q=${city}&appid=${API_KEY}`)
        const { lat, lon, name } = res1.data[0]
        const res2 = await axios.get(`${API_URL}/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}&units=metric`)
        const data = { name, ...res2.data }
        setData(data)
      } catch (error) {
        console.error(error.message);
      }
    }
  }
  function search(e) {
      e.preventDefault()
      getWeather(city)
      setCity('')
  }
  useEffect(() => {
    getWeather("Tashkent")
  }, [])

  return (
    <Context.Provider value={{ setCity, city, data, search }}>{children}</Context.Provider>
  )
}

export { ContextProvider, Context }