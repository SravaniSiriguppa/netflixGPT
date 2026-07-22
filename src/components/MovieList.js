import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) return;
    return (
        <div>
            <h2 className="font-bold text-white text-2xl px-[40px]">{title}</h2>
            <div className=" px-[40px] flex py-10 overflow-x-scroll overflow-y-visible">
                <br></br>
                <div className="flex">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            PosterPath={movie.poster_path}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
