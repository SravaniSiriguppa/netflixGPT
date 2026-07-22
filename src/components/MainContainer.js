import VideoBackground from "./videoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector((store) => store?.movies.nowPlayingMovies);

    // before fetching movies from TMDB
    if (!movies) return;

    // 1. Get a random movie index between 0 and array length - 1
    const mainMovieIndex = Math.floor(Math.random() * movies.length);

    // 2. Access the movie at that index
    const mainMovie = movies[mainMovieIndex];
    console.log(mainMovie);

    const { title, overview, id } = mainMovie;

    return (
        <div className="relative w-full aspect-video py-36 pt-[120px] px-10">
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id}/>
            Main Container
        </div>
    );
};

export default MainContainer;
