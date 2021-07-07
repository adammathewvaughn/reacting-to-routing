import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = ({ films }) => {
  //since fetching multiple objects, start off w/ empty array
  const [allFilms, setAllFilms] = useState([]);

  // useEffect(() => {
  //   fetch(`https://ghibliapi.herokuapp.com/films`)
  //     .then((res) => res.json())
  //     .then((allFilms) => setAllFilms(allFilms));
  // }, [allFilms]);
  return (
    <>
      {films.map((film) => (
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{film.description}</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/" className="card-link">
              Home
            </Link>
            <Link to={`/films/${film.id}`} className="btn btn-primary">
              Film Details
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
export default Films;
