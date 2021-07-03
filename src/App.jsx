import React from "react";


const App = () => {
    return (
      <>
      <div className="h-100 w-100 ">
      <div className="d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg h-550px navbar-light bg-dark d-flex justify-content-center ">
<ul className="nav mt-3 mb-3">
<li className="nav-item">
<a className="nav-link " href="https://code.visualstudio.com/"  target="_blank" rel="noopener noreferrer">Home</a>
</li>
<li className="nav-item mx-5">
<a className="nav-link" href="https://ghibliapi.herokuapp.com/films/"  target="_blank" rel="noopener noreferrer">Link Films</a>
</li>
<li className="nav-item">
<a className="nav-link " href="https://code.visualstudio.com/"  target="_blank" rel="noopener noreferrer">Link People</a>
</li>
</ul>
</nav>
      </div>  
      </div>
      </>
    );
  };
export default App;