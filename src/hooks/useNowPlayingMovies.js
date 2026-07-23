import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {
    // fetched TMDB movies data and adds it to the store
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS,
        );
        const json = await data.json();
        return dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        // perform function only when nowPlayingMovie is null (not in redux store yet)
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);

}

export default useNowPlayingMovies;