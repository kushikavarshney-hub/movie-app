import MovieCard from "../components/MovieCard";
import movies from "../services/api";
function Movies(){
    return(
        <div className="page">
            <section className="section">
                <h1>All Movies</h1>
                <p className="page-descritpion">Browse our collection and discover something great to watch. </p>
                <div className="movie-grid">{movies.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
                </div>
            </section>
        </div>
    );
}
export default Movies;