// importiamo le prop 

const FilmReview = ({ reviewProp }) => {

    const { name, vote, text } = reviewProp

    return (
        <div>
            < div className="card" >
                <div className="card-header">
                    Valutazione: {vote}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{text}</p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{name}</cite>
                        </footer>
                    </blockquote>
                </div>
            </div >
        </div >
    )
}

export default FilmReview