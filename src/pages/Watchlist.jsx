import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

function Watchlist() {
    const watchlist = useSelector(
        (state) => state.watchlist.movies
    );

    return (
        <div className="page">
            <h1>My Watchlist</h1>

            {watchlist.length === 0 ? (
                <p>Your saved movies will appear here.</p>
            ) : (
                <div className="movie-grid">
                    {watchlist.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Watchlist;