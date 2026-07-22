import React from 'react'
import  MovieList from "./MovieList";
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
  return (
    <div className="">
     {/* 
        MovieList - Popular
            MovieCard * n
        MovieList - Now Playing
        Movie List - Trending
        Movie List - Sci-fi
        */}
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer