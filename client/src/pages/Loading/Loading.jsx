import React from 'react'
import "./Loading.scss"
import  {Commet} from "react-loading-indicators"
const Loading = () => {
  return (
    <div className='loading'>
      <Commet color="#17c6aa" size="large" text="loading..." textColor="" />
    </div>
  )
}

export default Loading
