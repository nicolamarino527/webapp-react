import { Link } from "react-router"

const MovieCard = () => {
    return (
        <div className="card" style={{ width: '23em' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Eraserhead.jpg/640px-Eraserhead.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">film</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <Link to="movies/1" className="btn btn-primary">informazioni</Link>
            </div>
        </div>
    )
}

export default MovieCard