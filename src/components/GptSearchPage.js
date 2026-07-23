import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearchPage = () => {
    return (
        <div>
            <img
                className="fixed -z-10 w-full h-screen"
                src={BACKGROUND_IMG}
                alt=""
            />
            <GptSearchBar />
            <div className="p-2 m-2 text-white bg-black bg-opacity-90 rounded-2xl w-[500px] md:w-[1440px] h-[1720px]">
                <GptMovieSuggestions />
            </div>
        </div>
    );
};

export default GptSearchPage;
