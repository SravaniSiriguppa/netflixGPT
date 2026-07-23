import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
    const selector = useSelector((store) => store.gpt?.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div className="bg-black/90">
            <Header />
            {selector ? (
                <GptSearchPage />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
            {/* 
                mainContainer
                    - videoBackground
                    - videoTitle
                    - Play buttons
                SecondaryContainer
                    - MoviesList * n
                        - cards * n
             */}
        </div>
    );
};

export default Browse;
