import React from "react";
import {Link} from "react-router-dom";
// import "./Navigation.css";
import "./bootstrap.css";
import "./bootstrap.min.css";

function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/ReactMovieApp" class="navbar-brand">React Movies</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                        <Link to="/ReactMovieApp" class="nav-link active">Home
                        <span class="visually-hidden">(current)</span>
                        </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link">About</Link>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="/ReactMovieApp">ETC</a>
                        </li> */}
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn btn-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        // <div className="nav">
        //     <Link to="/ReactMovieApp">Home</Link>
        //     <Link to="/about">About</Link>
        // </div>
)}

export default Navigation;