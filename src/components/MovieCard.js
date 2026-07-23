import { MOVIE_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ PosterPath }) => {
    if (!PosterPath) return null;
    return (
        // <div className="relative w-40 flex-shrink-0 p-2 group">
        //     <img
        //         className="relative w-full rounded-md cursor-pointer transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:z-50 group-hover:shadow-2xl"
        //         src={MOVIE_IMAGE_URL + PosterPath}
        //         alt="movie_img"
        //     />
        // </div>
        <div
            className="relative w-40 flex-shrink-0 p-2
             transition-all duration-300 ease-in-out
             hover:scale-125 hover:z-50"
        >
            <img
                className="w-full rounded-md shadow-lg"
                src={MOVIE_IMAGE_URL + PosterPath}
                alt="movie_img"
            />
        </div>
    );
};

export default MovieCard;
