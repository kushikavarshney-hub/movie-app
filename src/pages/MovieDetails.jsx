import { Link, useParams } from "react-router-dom";
import movies from "../services/api";

function MovieDetails() {
    const { id } = useParams();

    const movie = movies.find(
        (movie) => movie.id === Number(id)
    );

    if (!movie) {
        return <h1>Movie not found!</h1>;
    }

    return (
        <div>
            <Link to="/movies">Back to Movies</Link>

            <h1>{movie.title}</h1>

            <img
                src={movie.image}
                alt={movie.title}
                width="300"
            />

            <p>Rating: {movie.rating}</p>

            <p>{movie.description}</p>
        </div>
    );
}

export default MovieDetails;