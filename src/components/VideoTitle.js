import { useSelector, useDispatch } from "react-redux";
import { setVideoSound } from "../utils/configSlice";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const videoSound = useSelector((store) => store.config.videoSound);

  const handleVideoSound = () => {
    dispatch(setVideoSound());
  }

  return (
    <div className="w-full h-full pt-[17%] md:pt-[20%] pl-5 text-white bg-gradient-to-r from-black/70 rounded-2xl">
      <div className="absolute top-5 right-5">
        <button className="px-[3px] rounded-full bg-gray-600/60" onClick={() => handleVideoSound()}>
          {videoSound ? <i class="bi bi-volume-up-fill text-xl"></i> : <i className="bi bi-volume-mute-fill text-xl"></i>}
        </button>
      </div>
      <div>
        <h2 className="font-bold text-xs md:text-3xl py-0 px-2 md:p-2 drop-shadow-lg">
          {title}
        </h2>

        <p className="md:w-5/12 w-9/12 line-clamp-5 md:line-clamp-none text-xs md:text-lg p-2">
          {overview}
        </p>
      </div>

      <div className="flex">
        <button className="bg-white rounded-3xl px-3 md:py-2 md:px-5 m-2 w-15 md:w-30 font-semibold text-black text-xs md:text-lg hover:bg-opacity-80 cursor-pointer">
          <i class="bi bi-play-fill"></i>Play
        </button>

        <button className="bg-white rounded-3xl px-1 md:p-2 m-2 font-semibold text-xs md:text-lg bg-opacity-45 hover:bg-opacity-30 md:w-25 w-15">
          <i className="bi bi-info-circle p-1"></i>More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;