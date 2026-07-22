import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailer = useSelector((store) => store.movies?.trailer);

    return (
        <div className="w-full">
            <iframe
                className="w-full h-full aspect-video rounded-2xl"
                src={`https://www.youtube.com/embed/${trailer?.key}?si=DMHmVqq-IAF3Ke0x&controls=0&autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&modestbranding=1&rel=0&playsinline=1&cc_load_policy=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
