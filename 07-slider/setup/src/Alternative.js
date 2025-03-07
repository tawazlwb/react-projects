import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [people] = useState(data)
  const [index, setIndex] = useState(0)

  const checkIndex = (position) => {
    const lastIndex = people.length - 1

    if (position < 0) {
      return lastIndex
    }

    if (position > lastIndex) {
      return 0
    }

    return position
  }

  const prevSlide = () => {
    setIndex((oldIndex) => {
      return checkIndex(oldIndex - 1)
    })
  }

  const nextSlide = () => {
    setIndex((oldIndex) => {
      return checkIndex(oldIndex + 1)
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      const newIndex = checkIndex(index + 1)
      setIndex(newIndex)
    }, 3000)

    return () => clearInterval(slider)
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>review
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          let position = 'nextSlide'

          if (index === personIndex) {
            position = 'activeSlide'
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}

        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
