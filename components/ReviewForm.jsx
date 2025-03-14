import axios from 'axios';

import { useState } from 'react';

// form
const ReviewForm = ({ movie_id, reloadReviews }) => {

    // settiamo i valori iniziali
    const initialValue = { name: "", text: "", vote: 1 };

    // variabili di stato per il form 
    const [formData, setFormData] = useState(initialValue);

    // funzione per la creazione deglioogetti per il form
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // endpoint dell'url
    const urlEndpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    // funzione per l'invio della richiesta al submit
    const submitReview = (e) => {
        e.preventDefault();

        axios.post(urlEndpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                () => {
                    setFormData(initialValue)
                    reloadReviews()
                }
            )
            .catch(err => console.log(err)
            )
    }

    return (
        <div>
            <form onSubmit={submitReview}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={setFieldValue}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Review</label>
                    <textarea
                        className="form-control"
                        id="text"
                        name="text"
                        value={formData.text}
                        onChange={setFieldValue}
                        rows="3"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Vote</label>
                    <input
                        type="number"
                        className="form-control"
                        id="vote"
                        name="vote"
                        value={formData.vote}
                        onChange={setFieldValue}
                        min="1"
                        max="5"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm