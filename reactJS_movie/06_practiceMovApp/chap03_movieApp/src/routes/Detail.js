import React, {useEffect} from 'react';
import {Link}from "react-router-dom";
import {useParams} from "react-router-dom";

function Detail() {
    const {id} = useParams();
    // console.log(id);

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };

    useEffect(() =>{
        getMovie();
    }, []);
    return (
        <>
            <h1>Detail</h1>

            <a href="/">reload router:::: </a>
            <br/>
            <Link to="/">Link router ::::  </Link>
        </>
);
}

export default Detail;