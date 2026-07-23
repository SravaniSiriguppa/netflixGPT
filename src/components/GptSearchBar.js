import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import {addGPTMovies} from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const languagetoTranslateTo = useSelector((store) => store.config.lang);
    const searchText = useRef(null);


    const searchMovieInTMDB = async (movieName) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`, API_OPTIONS)
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchBtn =  async () => {
        const gptQuery = " Act as a Movie Reccomendation system and suggest some movies for the query : " + searchText.current.value + ". Only give me names of 5 movies which are comma (',') separated like the example given ahead. Example: Godavari, FRIENDS, Oye, Bommarillu, Anand";
        const gptResults = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: gptQuery
                },
            ],
        });

        const gptMovies  = gptResults.choices?.[0]?.message?.content.split(",");
        // const gptMovies = ["MAD", "F3: Fun and Frustration", "Miss Shetty Mr. Polishetty", "DJ Tillu", "Samajavaragamana"];

        // fetch TMDB data for each movie we gt from neflix query response
        const tmdbMoviesPromises = gptMovies.map(async(gptMovie) => await searchMovieInTMDB(gptMovie));
        const tmdbMovies = await Promise.all(tmdbMoviesPromises);
        dispatch(addGPTMovies({tmdbMovies, gptMovies}));
    };

    return (
        <div className="md:pt-[8%] flex justify-center pt-[30%]">
            <form
                className="md:w-1/2 w-8/12 grid grid-cols-12 rounded-md bg-black/70"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className="col-span-9 px-4 m-2 rounded-md text-xs md:text-lg"
                    placeholder={
                        lang[languagetoTranslateTo].gptSearchPlaceholder
                    }
                />
                <button
                    className="text-white bg-red-700 w-19 px- 2 md:w-18 md:px-4 col-span-3 rounded-md h-8 m-2"
                    onClick={() => handleGptSearchBtn()}
                >
                    {lang[languagetoTranslateTo].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
