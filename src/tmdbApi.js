/* eslint import/no-anonymous-default-export: */

const API_KEY = 'a10b51695a7a45ec1f414df3a02ff452';
const API_BASE = 'https://api.themoviedb.org/3';

async function basicFetch(endpoint) {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originais',
        title: 'Originais Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trendings',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentario',
        items: await basicFetch(`/discover/movie?with_genres=99  &language=pt-BR&api_key=${API_KEY}`)
      }
    ]
  },

  getMovieInfo: async (MovieId, type) => {
    let info = {};

    if(MovieId) {
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${MovieId}?language=pt-BR&api_key=${API_KEY}`);
        break;

        case 'tv':
          info = await basicFetch(`/tv/${MovieId}?language=pt-BR&api_key=${API_KEY}`);
        break;

        default: 
          info = null
        break;
      };
    };

    return info;
  }
};