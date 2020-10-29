import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const AnimalCard = (props) => {
    const { name, additional, diet, scientificName, size, showAdditional } = props;
    return (
            <div className="animalWrapper">
                <h2>{name}</h2>
                <h3>{scientificName}</h3>
                <h4>{size}kg</h4>
                <div>{diet.join(', ')}.</div>
                <button onClick={() => showAdditional(additional)}>More info</button>
            </div>
    )
}

export { AnimalCard }

AnimalCard.propTypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired
}

AnimalCard.defaultProps = {
    additional: {
        notes: 'No additional Information'
    }
}