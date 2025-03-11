const FilmReview = () => {
    return (
        <div className="review-container">
            <div className="card" style={{ width: '50em' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Eraserhead.jpg/640px-Eraserhead.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">film</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FilmReview