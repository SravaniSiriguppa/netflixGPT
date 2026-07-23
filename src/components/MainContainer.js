import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const MainContainer = () => {
    const movies = useSelector((store) => store?.movies.nowPlayingMovies);

    // // 1. Get a random movie index between 0 and array length - 1
    // const mainMovieIndex = Math.floor(Math.random() * movies.length);

    // // 2. Access the movie at that index
    // const mainMovie = movies[mainMovieIndex];

    const mainMovie = useMemo(() => {
        if (!movies || movies.length === 0) return null;

        return movies[Math.floor(Math.random() * movies.length)];
    }, [movies]);

    // before fetching movies from TMDB
    if (!mainMovie) return null;

    const { title, overview, id } = mainMovie;

    return (
        <div className="relative w-full aspect-video py-36 pt-[120px] px-10 pb-[20px] bg-black/90">
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;
