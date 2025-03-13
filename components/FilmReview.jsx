// importiamo le prop 

const FilmReview = ({ reviewProp }) => {

    const { name, vote, text } = reviewProp

    return (
        <div className="review-container">
            <div className="card">
                <div className="card-header">
                    {text}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{vote}</p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">{name}</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default FilmReview