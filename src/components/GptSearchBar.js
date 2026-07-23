import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const languagetoTranslateTo = useSelector((store) => store.config.lang);
    
    return (
        <div className="pt-[8%] flex justify-center ">
            <form className="w-1/2 grid grid-cols-12 bg-black/70 rounded-md">
                <input
                    type="text"
                    className="col-span-9 px-4 m-2 rounded-md"
                    placeholder= {lang[languagetoTranslateTo].gptSearchPlaceholder}
                />
                <button className="text-white bg-red-700 w-18 px-4 col-span-3 rounded-md h-8 m-2">
                    {lang[languagetoTranslateTo].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
