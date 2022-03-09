import PropTypes from "prop-types";
import React from 'react';
import {Link}from "react-router-dom";

function  Movie( {coverImg, title, summary, genres}){
    return(
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <a href="/movie">reload router:::: {title} </a>
                <br/>
                <Link to="/movie">Link router :::: {title} </Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                        <li key={g}> {g} </li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes={
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default Movie;