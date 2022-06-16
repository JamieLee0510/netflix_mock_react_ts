import axios from 'axios';

/** base url to make requests to the the movie database */
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});


export function getMovieRows(movies :any, url:string) {
    const movieRow = movies.map((movie :any) => {
      let movieImageUrl =
        'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
      if (
        url === `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
      ) {
        movieImageUrl =
          'https://image.tmdb.org/t/p/original/' + movie.poster_path;
      }
  
    //   if (movie.poster_path && movie.backdrop_path !== null) {
    //     const movieComponent = (
    //       <MovieGenre
    //         key={movie.id}
    //         url={url}
    //         posterUrl={movieImageUrl}
    //         movie={movie}
    //       />
    //     );
  
        // return movieComponent;
        return []
      }
    });
  
    return movieRow;
  }