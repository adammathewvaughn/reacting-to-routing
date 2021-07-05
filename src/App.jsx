import React from "react";
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
  return (
    <BrowserRouter>
    
    <Navbar />
      <Switch>
        <Route exact path="/characters">
        <Characters />
        </Route>
        <Route exact path="/characters:details">
        <Charactersdetails/>
        </Route>
        <Route exact path="/films:details">
        <Filmdetails />
        </Route>
        <Route exact path="/films">
        <Films />
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
      </Switch>
      
      </BrowserRouter>
  );
};
export default App;
 
