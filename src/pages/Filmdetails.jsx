import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";



const Filmdetails = () => {
  const [singlefilm, setSingleFilm]= useState()
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then(res=>res.json())
    .then(singlefilm =>setSingleFilm(singlefilm))

    
  }, [singlefilm]);
  return (
    <main className="container text-center">
      <section className="row mt -3">
        <div className="col-12">
          <h1>Film Details Page</h1>
          {/* plugging in question mark if state value is undefined (on first render) will make this work
          could also make the useEffect async */}
          <h2>{ singlefilm?.title }</h2>
          <h2>{ singlefilm?.description }</h2>
          <h2>{ singlefilm?.director }</h2>
        </div>
      </section>
    </main>
  );
};
export default Filmdetails;