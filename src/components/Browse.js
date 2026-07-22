import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    
    return (
        <div className=" bg-black/90">
            <Header />
            {/* 
                mainContainer
                    - videoBackground
                    - videoTitle
                    - Play buttons
                SecondaryContainer
                    - MoviesList * n
                        - cards * n

             */}
             < MainContainer />
             < SecondaryContainer />
        </div>
    );
};

export default Browse;
