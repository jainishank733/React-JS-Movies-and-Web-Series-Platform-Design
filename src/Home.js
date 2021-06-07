import movies_logo from '../src/ImagesAssignment/watchMoviesIcon.png';
import series_logo from '../src/ImagesAssignment/watchSeriesIcon.png';
import './App.css';
import { useHistory } from 'react-router-dom';


const Home = () => {

    const history = useHistory();

    const routeMovies = () => {
        history.push("/movies");
    }
    
    const routeSeries = () => {
        history.push("/series");
    }

    return (
        <>
            
            <h2 className="heading">Movies and Web Series</h2>
            <div className="logo-Style">
                <button onClick={routeMovies}><img src={movies_logo} alt="Logo" className="movies-logo" /></button>
                <p>Movies</p>
            </div>
            <div className="logo-Style">
                <button onClick={routeSeries}><img src={series_logo} alt="Logo" className="series-logo" /></button>
                <p>Web Series</p>
            </div>
            
        </>

    );
}

export default Home;