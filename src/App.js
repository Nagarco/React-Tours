import React, { useState, useEffect, useContext, createContext } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

export const TourContext = createContext();

const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])


  if (loading) {
    return <main>
      <Loading />
    </main>
  }

  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>No Tours left</h2>
        <div className='underline'></div>
        <button className='btn' onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }

  return <TourContext.Provider value={{ removeTour }}>
    <main>
      <Tours tours={tours} />
    </main>
  </TourContext.Provider>

}

export default App
