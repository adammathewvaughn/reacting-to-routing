import React from "react";
import {  useState, useEffect  } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Charactersdetails from "./pages/Characterdetails";
import Filmdetails from "./pages/Filmdetails";
import Error from "./pages/Error";
import Films from "./pages/Films";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";


const App = () => {
  let [films,setFilms]=useState([]);
  let [characters,setCharacters]=useState([]);
  
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res=>res.json())
    .then(films =>setFilms(films))
  }, []);
  
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
    .then(res=>res.json())
    .then(characters =>setCharacters(characters))
  }, []);
  
  return (
    <BrowserRouter>
    
    <Navbar />
      <Switch>
        <Route exact path="/characters">
        <Characters characters={characters}/>
        </Route>
        <Route exact path="/characters/:details">
        <Charactersdetails/>
        </Route>
        <Route exact path="/films/:id">
        <Filmdetails />
        </Route>
        <Route exact path="/films">
        <Films films={films}/>
        </Route>
        <Route exact path="/contact">
        <Contact /> 
        </Route>
        <Route exact path="/">    {/* <= put the most generic routes on bottom of stacking path */}
         <Home />
        </Route>
        <Route exact path="*">
         <Error />
        </Route>
        
          {characters.map(character=><Characters key={character.id} character={character} />)} 
          {films.map(film=><Films key={film.id} film={film} />)} 

      </Switch>
      
      </BrowserRouter>
  );
  };
  export default App;

  