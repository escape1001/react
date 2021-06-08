import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({id, year, title, summary, poster, genres}){
    return (
        <div className="movieBlock">
            <Link to={{
                pathname : `/detail/${id}`,
                state : {
                    year, title, summary, poster, genres
                }
            }}>
                <p className="movieImg">
                    <img src={poster} alt={title}/>
                </p>
                <div className="movieDesc">
                    <h3>{title}</h3>
                    <h5>{year}</h5>
                    <ul>
                        {genres.map( (genre, index) => (<li key={index}>{genre}</li>) )}
                    </ul>                
                    <p className="summary">{summary.slice(0,140)}...</p>
                </div> 
            </Link>                       
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;