import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
    const GptSearch = useSelector((store) => store.gpt.showGptSearch);

    const { gptMovies, tmdbMovies } = useSelector((store) => store.gpt);

    if (!gptMovies || !tmdbMovies) return null;

    return (
        GptSearch && (
            <div className="">
                {gptMovies.map((gptMovie, index) => (
                    <MovieList
                        key={gptMovie}
                        title={gptMovie}
                        movies={tmdbMovies[index]}
                    />
                ))}
                {/* <MovieList title={gptMovies[0]} movies={tmdbMovies[0]} /> */}
            </div>
        )
    );
};

export default GptMovieSuggestions;
