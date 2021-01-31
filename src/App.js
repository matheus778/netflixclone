import React, {useEffect, useState} from 'react';
import tmdb from './tmdbApi';
import MovieRow from './components/MovieRow';
/* eslint-disable*/

function App () {
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();  
  }, [])

  return (
    <div className="page">
     <section className="lists">
      {movieList.map((item, key)=>(
        <MovieRow title={item.title} items={item.items} key={key}/>
      ))}
     </section>
    </div>
  );
}

export default App;