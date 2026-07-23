import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailer = useSelector((store) => store.movies?.trailer);
    const videoSound = useSelector((store) => store.config.videoSound);

    const mutedVideo = `https://www.youtube.com/embed/${trailer?.key}?si=DMHmVqq-IAF3Ke0x&controls=0&autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&modestbranding=1&rel=0&playsinline=1&cc_load_policy=0`

    const unMutedVideo = `https://www.youtube.com/embed/${trailer?.key}?si=DMHmVqq-IAF3Ke0x&controls=0&autoplay=1&mute=0&loop=1&playlist=${trailer?.key}&modestbranding=1&rel=0&playsinline=1&cc_load_policy=0`

    return (
        <iframe
            className="w-full h-full aspect-video"
            src={videoSound ? unMutedVideo : mutedVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
    );
};

export default VideoBackground;
