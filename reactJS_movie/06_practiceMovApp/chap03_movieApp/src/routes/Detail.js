import React, {useEffect, useState} from 'react';
import {Link}from "react-router-dom";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";
// import Movie from "../components/Movie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        console.log(json);
        console.log(movies);
        setMovies(json);
        setLoading(false);
        console.log(movies);
    };

    useEffect(() => {
        getMovie(movies);
    }, []);

    return (
        <>
            <h1>Detail</h1>
            <a href="/">reload router:::: </a>
            <br/>
            <Link to="/">Link router ::::  </Link>
            <hr/>


            <div> {
                loading ? (<h1>loading.... now... </h1>)
                    :
                    (
                        <div>
                            <h1>{movies.data.movie.title} ({movies.data.movie.id})</h1>
                            <img src={movies.data.movie.medium_cover_image} alt={movies.data.movie.title}/>
                            <h1>{movies.data.movie.title}</h1>
                            <h1>{movies.data.movie.summary}</h1>
                            <h1>{movies.data.movie.genres}</h1>


                        </div>
                    )
            }</div>


        </>
);
}

export default Detail;