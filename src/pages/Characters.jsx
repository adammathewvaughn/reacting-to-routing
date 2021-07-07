import React from "react";


const Characters = ({ characters }) => {
  

  
  return (
  
    <main className="container text-center">
      <section className="row mt -3">
        <div className="col-12">
    
          <h1>Characters Page</h1>
          <h1>{characters.name}</h1>
          {characters.map((character) => (

<div className="col-12">
  <h1>{character.name}</h1>
</div>
))}
        </div>
      </section>
    </main>
  );
};
export default Characters;