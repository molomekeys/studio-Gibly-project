import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'
import SingleMovie from './component/SingleMovie';
function App() {
  const [moviesData, setMoviesData] = useState([])

  let filteredData;
  useEffect(() => {
    axios.get('https://ghibliapi.herokuapp.com/films').then(res => {
      setMoviesData(res.data);
    })
  }, [])
  function handleChange(e) {
    filteredData = moviesData.filter((val) => {

    })

  }
  console.log(filteredData);
  const allElement = moviesData.map(element => {
    return <SingleMovie imageUrl={element.image}
      description={element.description}
      coverImg={element.movie_banner}
      righting={element.rt_score}
      title={element.title}
      key={element.id}
      origineTitle={element.original_title_romanised}
      releasedDate={element.release_date}
      producer={element.producer} />
  })
  return (
    <div className="App">
      <div>
        <input placeholder='Find a movie'
          onChange={handleChange} style={{
            width: '300px', padding: '20px',
            height: '40px', margin: '100px'
          }} />
      </div>
      <div>

        <h3>all movies</h3>
      </div>
      <motion.div className='allMovies'>

        {allElement}
      </motion.div>

    </div>
  );
}

export default App;
