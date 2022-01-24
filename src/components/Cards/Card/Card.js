import React from 'react'
import PropTypes from 'prop-types'
import "./Card.css"
import {Link} from "react-router-dom"

const Card = ({description,link}) => {

  return (

    <Link to={link} className="card">
      <div className="card__container">
        <div className="front">
          <div className="inner">
              <p>{description.title}</p>
              <span>{description.descritpion}</span>
          </div>

        </div>
        <div className="back">
          <div class="inner">
						  <p>{description.details}</p>
						</div>
        </div>

      </div>
    </Link>
  )
}

export default Card
