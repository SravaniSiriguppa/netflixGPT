import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    // const [movieTrailerKey, setMovieTrailerKey] = useState(null);
    const dispatch = useDispatch();
    // const trailer = useSelector((store) => store.movies?.trailer);

    // Fetch trailer video 
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
                movieId +
                "/videos?language=en-US",
            API_OPTIONS,
        );
        const json = await data.json();
        console.log("video: ", json);

        const trailers = json.results.filter(
            (video) => video.type === "Trailer",
        );
        const trailer = trailers.length > 0 ? trailers[0] : json.results[0];
        // setMovieTrailerKey(movieTrailer?.key)
        console.log("trailer:", trailer);
        dispatch(addMovieTrailer(trailer));
    };

    useEffect(() => {
        getMovieVideos();
    }, [movieId]);
    // [movieId]); // if done using useState (state variables) as i am fetching random movie and we need to wait for the correct key or else there will be mismatch of movie trailer.
};

export default useMovieTrailer;
