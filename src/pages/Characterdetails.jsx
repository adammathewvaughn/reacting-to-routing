import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";




const Characterdetails = () => {
  const [characterdetails, setCharacterDetails] = useState();
  const { details } = useParams();
  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${details}`)
    .then(res=>res.json())
    .then(characterdetails =>setCharacterDetails(characterdetails))
  }, [details]);
 
  return (
    // <main className="container text-center">
    //   <section className="row mt -3">
    //     <div className="col-12">
    //       <h1>Character Details Page</h1>
    //       <h1>Character Details Page</h1>
    //       <h1>Character Details Page</h1>
    //       <h1>{ characterdetails.name }</h1>
    //     </div>
    //   </section>
    // </main>
     
     <div class="row row-cols-1 row-cols-md-2">
       {/* <!--tips: use row-cols-md-(X) to control how many of columns to show per row-->
       <!--tips: when you need equal height, add .h-100 to the cards-->
       <!--Card1--> */}
       < div class= "col mb-4">
         <div class="card">
          
           <div class="card-body">
             <h5 class="card-title">{ characterdetails?.name }</h5>
             <h5 class="card-title">{ characterdetails?.age }</h5>
             <p class="card-text">{ characterdetails?.films }</p>
             <link class="card-text">{ characterdetails?.url }</link>
           </div>
         </div>
         </div>
         </div>
       
       
  );
};
export default Characterdetails;
