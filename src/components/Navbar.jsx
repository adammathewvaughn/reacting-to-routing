import React from "react";

const Navbar = () => {
  return (
  <>
<nav id="myNavbar" className="navbar navbar-light bg-light">
  <a className="navbar-link" href="/">Home</a>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link" href="/films">Films</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/characters">Characters</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="/characters/:details">Character Details</a>
        <a className="dropdown-item" href="/films/:details">Film Details</a>
      </div>
    </li>
  </ul>
</nav>
  <a className="navbar-brand" href="/contact">Contact Me!</a>
{/* <div data-spy="scroll" data-target="#myNavbar" data-offset="0">
  <h4 id="one">One</h4>
  <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
  <h4 id="two">Two</h4>
  <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
  <h4 id="three">Three</h4>
  <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
  <h4 id="four">Four</h4>
  <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
</div> */}
    </>
  );
};
export default Navbar;
