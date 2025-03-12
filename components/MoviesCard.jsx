import { Link } from "react-router"

const MovieCard = ({ movieProp }) => {

    const { id, title, director, image } = movieProp;


    return (
        <div className="card" style={{ width: '23em' }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Direttore: {director}</p>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <Link to={`/movies/${id}`} className="btn btn-primary">informazioni</Link>
            </div>
        </div>
    )
}

export default MovieCard