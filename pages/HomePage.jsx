import MovieCard from "../components/MoviesCard"

const HomePage = () => {
    return (
        <div>
            <h1>Benvenuto nella pagina della home </h1>
            <p>qui troverai tutti i tuoi films</p>
            <div className="movie-container">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    )
}

export default HomePage