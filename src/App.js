import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'
import SingleMovie from './component/SingleMovie';
function App() {
  const [moviesData, setMoviesData] = useState([])

  useEffect(() => {
    axios.get('https://ghibliapi.herokuapp.com/films').then(res => {
      setMoviesData(res.data);
    })
  }, [])
  console.log(moviesData);
  const allElement = moviesData.map(element => {
    return <SingleMovie imageUrl={element.image}
      description={element.description}
      coverImg={element.movie_banner}
      righting={element.rt_score}
      title={element.title}
      key={element.id}
      origineTitle={element.original_title_romanised} />
  })
  return (
    <div className="App">
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
