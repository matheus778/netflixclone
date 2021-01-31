import React, {useEffect, useState} from 'react';
import './App.css';
import tmdb from './tmdbApi';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App () {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(()=>{
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=> i.slug === 'originais');
      let randomChosed = Math.floor(Math.random()*(originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosed];

      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)
    
    }

    loadAll();  
  }, [])

  useEffect(() => {
    const scrollListenner = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      }
      else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListenner);

    return ()=>{
      window.removeEventListener('scroll', scrollListenner);
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

     <section className="lists">
      {movieList.map((item, key)=>(
        <MovieRow title={item.title} items={item.items} key={key}/>
      ))}
     </section>

     <footer>
       Direitos de imagem para Netflix<br/>
       Dados pegos no site Themoviedb.org
     </footer>
    
    {movieList.length <= 0 &&
     <div className="loading">
        <img alt="carregamento" src="http://cdn.lowgif.com/full/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif"/>
     </div>
    }
    </div>
  );
}

export default App;