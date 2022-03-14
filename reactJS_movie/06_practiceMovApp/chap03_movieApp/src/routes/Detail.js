import React, {useEffect, useState} from 'react';
import {Link}from "react-router-dom";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    const {id} = useParams();
    // console.log(id);

    const [movies, setMovies] = useState([]);

    const getDetailMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        console.log(json.data.movie.title);
         setMovies(json.data.movie);

        console.log(movies);

    };

    useEffect(() => {
        getDetailMovie();
    }, []);

    return (
        <>
            <h1>Detail</h1>

            <a href="/">reload router:::: </a>
            <br/>
            <Link to="/">Link router ::::  </Link>
            <hr />
            {/*json.data.movie.title*/}
            {/*<Movie*/}
            {/*    key={movies.movie.id}*/}
            {/*    id={movies.movie.id}*/}
            {/*    coverImg={movies.movie.medium_cover_image}*/}
            {/*    title={movies.movie.title}*/}
            {/*    summary={movies.movie.summary}*/}
            {/*    genres={movies.movie.genres}*/}
            {/*/>*/}


        </>
);
}

export default Detail;