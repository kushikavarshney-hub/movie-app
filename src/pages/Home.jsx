import{Link}from "react-router-dom";
import MovieCard from "../components/MovieCard";
import movies from "../services/api";
function Home(){
    return(
        <div className="page">
            <section className="hero">
                <div>
                    <h1>Discover Your Next Favourite Movie</h1>
                    <p>Explore movies check their details, and keep track of the ones you love.</p>
                    <Link to="/movies" className="primary-btn">Browse Movies</Link>
                </div>
            </section>
            <section className="section">
                <h2>Popular Movies</h2>
                <div className="movie-grid">
                    {movies.map((movie)=>(
                    <MovieCard 
                    key={movie.id}
                     movie={movie}/>
                ))}
                </div>
            </section>
        </div>
    );
}
export default Home;