import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
        <img className="absolute -z-10 w-full h-screen" src={BACKGROUND_IMG} alt="" />
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage