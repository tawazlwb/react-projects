import React, { useState, useEffect } from 'react'

import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <main>
      {loading && <Loading />}
      {!loading && tours?.length > 0 && (
        <Tours tours={tours} removeTour={removeTour} />
      )}
      {!loading && tours?.length === 0 && (
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>
            refresh
          </button>
        </div>
      )}
    </main>
  )
}

export default App
