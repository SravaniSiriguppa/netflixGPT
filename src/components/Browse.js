import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    useNowPlayingMovies();
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
