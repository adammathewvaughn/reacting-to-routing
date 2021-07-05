import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'



const Filmdetails = () => {
  const { filmdetails } = useParams();
  return (
    <main className="container text-center">
      <section className="row mt -3">
        <div className="col-12">
          <h1>Film Details Page</h1>
          <p>{ filmdetails }</p>
        </div>
      </section>
    </main>
  );
};
export default Filmdetails;