import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  console.log(hexColor)
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  // const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  const handleClick = () => {
    navigator.clipboard.writeText(hexValue)
    setAlert(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleClick}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
