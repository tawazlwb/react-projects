import React, { useState } from 'react'
import { IoIosRemove, IoIosAdd } from 'react-icons/io'

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <IoIosRemove /> : <IoIosAdd />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question
