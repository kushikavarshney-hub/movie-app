import{Link}from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/" className="logo">Movie App</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/watchlist">Watchlist</Link>
            </div>
        </nav>
    );
}
export default Navbar;