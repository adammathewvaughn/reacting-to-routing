import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'



const Characterdetails = () => {
  const { characterdetails } = useParams();
  return (
    <main className="container text-center">
      <section className="row mt -3">
        <div className="col-12">
          <h1>Character Details Page</h1>
          <h1>Character Details Page</h1>
          <h1>Character Details Page</h1>
          <h1>{ characterdetails }</h1>
        </div>
      </section>
    </main>
  );
};
export default Characterdetails;