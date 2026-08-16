import {Link}from "react-router-dom";
import{useDispatch,useSelector}from "react-redux";
import{addToWatchlist,removeFromWatchlist}from "../redux/watchlistSlice";
function MovieCard({movie}){
    const dispatch=useDispatch();
    const watchlist=useSelector((state)=>state.watchlist.movies);
    const IsInWatchlist=watchlist.some((item)=>item.id===movie.id);
    const handleWatchlist=()=>{
        if(IsInWatchlist){
            dispatch(removeFromWatchlist(movie.id));
       }else{
        dispatch(addToWatchlist(movie));
       }
    };
    return(
        <div className="movie-card">
            <img src={movie.image} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <p>{movie.rating}</p>
            <Link to={`/movies/${movie.id}`}>View Details</Link>
<button onClick={handleWatchlist}>
                {IsInWatchlist
                    ? "Remove from Watchlist"
                    : "Add to Watchlist"}
            </button>      
              </div>
    );
}
export default MovieCard;