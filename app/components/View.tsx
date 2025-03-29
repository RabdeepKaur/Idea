import React from 'react'
import Ping from './Ping'

const View = ({id}:{id:string}) => {
  return (
    <div  className='ciew-container'>
      <div className="absoulte-top-2 -right-2"></div>
      <Ping/>
      <p className="view-text">
        <span className='font-black'></span>
      </p>
    </div>

  )
}

export default View
