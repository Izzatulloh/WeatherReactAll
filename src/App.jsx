import React, { useContext } from 'react'
import Content from './Components/Content'
import Nav from './Components/Nav'
import Week from './Components/Week'
import { Context } from './Context/Context'
function App() {
  const { data } = useContext(Context)
  
  if (!data) {
    return (
      <div className="loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
  return (
    <>
      <Nav />
      <div className="container">
        <Content data={data} current={data?.current} name={data?.name}/>
        <Week daily={data?.daily}/>
      </div>
    </>

  )
}

export default App