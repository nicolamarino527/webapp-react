import axios from "axios"

import { useState, useEffect } from "react"

import { Link, useParams, useNavigate } from "react-router-dom"

import FilmReview from "../components/FilmReview"

import ReviewForm from "../components/ReviewForm"

const FilmsPage = () => {

    // use navigare per redirect
    const redirect = useNavigate();

    // id films
    const { id } = useParams();



    // settiamo lo stato del componente 
    const [movie, setMovie] = useState({});

    // settiamo la chiamata per le informazioni sui film
    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")

            })
    }

    // chiama l'api al montaggio del componente 
    useEffect(fetchMovies, [])

    // effettuiamo il rendering delle reviews
    const renderReviews = () => {
        return movie.reviews?.map(review => <FilmReview key={review.id} reviewProp={review} />
        )
    }


    return (
        <div className="review-container">
            <div>
                {renderReviews()}
            </div>
            <div>
                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovies} />
            </div>
        </div>
    )
}

export default FilmsPage