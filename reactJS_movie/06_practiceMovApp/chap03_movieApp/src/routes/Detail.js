import React from 'react';
import {Link}from "react-router-dom";

function Detail() {
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