// axios
import axios from "axios"

import { useEffect, useState } from "react"

import MovieCard from "../components/MoviesCard"

const HomePage = () => {

    // settiamo lo stato per il componente
    const [movies, setMovies] = useState([]);

    // funzione di chiamata api 
    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movies")
            .then(
                res => {
                    setMovies(res.data)
                }
            )
            .catch(err => console.log(err)
            )
    }
    useEffect(fetchMovies, [])

    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <div key={movie.id}>
                    <MovieCard movieProp={movie} />
                </div>
            )
        }
        )
    }

    return (
        <div>
            <h1>Benvenuto nella pagina della home </h1>
            <p>qui troverai tutti i tuoi films</p>
            <div className="movie-container">
                {renderMovies()}
            </div>
        </div>
    )
}

export default HomePage