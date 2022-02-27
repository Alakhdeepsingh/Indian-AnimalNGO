import "./App.css";
import { About } from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./L.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";
import i1 from "./i1.jpg";
import i3 from "./i3.jpg";
import i2 from "./i2.jpg";
import poordog5 from "./poordog5.jpg"
import poordog6 from "./poordog6.jpg"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

let style = {
  //width: "10px",
  height: "640px",
  
  
};
//slider

let light = {
  color: "white",
};
//footer text

let size = {
  width: "70px",
  height: "50px",
  padding: "5px",
};
//contact us icons size

let margin = {
  marginTop: "20px",
  marginBottom: "20px",
};
//contact us margin

let margin1 = {
  marginLeft: "25px",
};
//navbar donate button right left

let margin2 = {
  margin: "20px",
  height:650,
  width:5,
  marginbottom: "10px",


};
//gapping between our vision and below three box

let wow = {
  paddingLeft: "30px",
};
//AnimalNGO space from the left in navabar

let hey = {
  padding: "10px",
  
};
//padding of all the three box


//linkedin and github below animalngo.org

let color = {
  backgroundImage:
  "linear-gradient(to top, #ffffff 0%, #ccffff 100%)"
};
//background color




function App() {
  return (
    <>
      <Router>
        <div style={color} className="App">
          <ReactBootStrap.Navbar bg="white" expand="lg">
            <ReactBootStrap.Navbar.Brand as={Link} style={wow} to="/">
              Animal NGO
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootStrap.Navbar.Collapse id="navbarScroll">
              <ReactBootStrap.Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                
              >
                <ReactBootStrap.Nav.Link as={Link} style={wow} to="/about">
                  About
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Button
                style={margin1}
                className="float-right"
                href="https://rzp.io/l/68IC5Nb"
                variant="outline-success"
              >
                Donate
              </ReactBootStrap.Button>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
          <Switch>
            <Route exact path="/">
              {
                <>
                  <div>
                    <ReactBootStrap.Carousel>
                      <ReactBootStrap.Carousel.Item interval={1000}>
                        <img
                          style={style}
                          className="w-100"
                          src={img2}
                          alt="First slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Save Animals</h3>
                          <p>
                            Divided by intelligence, united by a heartbeat –
                            Save animals.
                          </p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                      <ReactBootStrap.Carousel.Item interval={1000}>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={img3}
                          alt="Second slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Stand for Animal Rights!</h3>
                          <p>
                            Be kind to animals or stop calling yourself human.
                          </p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                      <ReactBootStrap.Carousel.Item>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={poordog5}
                          alt="Third slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Respect animals</h3>
                          <p>The Earth will lose its soul without animals.</p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>



                      <ReactBootStrap.Carousel.Item>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={poordog6}
                          alt="Third slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Respect animals</h3>
                          <p>The Earth will lose its soul without animals.</p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>


                    </ReactBootStrap.Carousel>
                  </div>



                <div className="row height" style={{padding:100}} >
                  <div className="col col-4 height" >

                  <div>
                  <ReactBootStrap.Modal.Dialog>
                    <ReactBootStrap.Modal.Title style={wow}>
                    BECOME VOLUNTEER
                    </ReactBootStrap.Modal.Title>

                    <ReactBootStrap.Modal.Body>
                      <p>
                     
                      There are so many takers for pedigree dogs. But our Desi Indian breed look upto you.. Make a difference!
You will primarily socialize with puppies, cats and dogs in addition to walking the dogs. It’s essential to teach dogs and cats to trust people if they are to find their fur-ever homes.

Almost all of our animals are ex-street dogs and cats who have never been indoors and need to learn to feel comfortable around people. 

We strongly encourage volunteers to spend a month or longer at our rehab facility at anywhere in the world. The more time they spend with the animals, the closer
                      </p>
                    </ReactBootStrap.Modal.Body>

                    {/* <ReactBootStrap.Modal.Footer> */}
                      {/* <ReactBootStrap.Button
                        className="btn btn-success"
                        variant="primary"
                        href="https://rzp.io/l/68IC5Nb"
                      >
                        Donate
                      </ReactBootStrap.Button> */}
                    {/* </ReactBootStrap.Modal.Footer> */}
                  </ReactBootStrap.Modal.Dialog>
                  </div>
                  </div>


                  <div className="col col-4 ">

                  <div>


                  <ReactBootStrap.Modal.Dialog>
                    <ReactBootStrap.Modal.Title style={wow}>
                      Our Vision
                    </ReactBootStrap.Modal.Title>

                    <ReactBootStrap.Modal.Body>
                      <p>
                        Animal NGO is founded by visionaries who felt the need
                        to build a free of cost medical facility for the stray
                        animals where the best, most advanced, ethical and
                        highly skilled medical care is readily available.
                        Main mission is to connect and empower animal protectors to achieve animal rights by advocacy, networking and capacity building to create a high-impact  which will continually address ongoing animal issues.
                      </p>
                    </ReactBootStrap.Modal.Body>

                                    <ReactBootStrap.Modal.Footer> 
                                    <ReactBootStrap.Button
                        className="btn btn-primary"
                        variant="primary"
                        href="https://rzp.io/l/68IC5Nb"
                        size="lg"
                      >
                        Donate
                      </ReactBootStrap.Button>
                    
                    </ReactBootStrap.Modal.Footer> 
                  </ReactBootStrap.Modal.Dialog>
                  </div>
</div>

<div className="column col-4 ">


<div>

<ReactBootStrap.Modal.Dialog>
  <ReactBootStrap.Modal.Title style={wow}>
  ADOPT A PET
  </ReactBootStrap.Modal.Title>

  <ReactBootStrap.Modal.Body>
    <p>
   

    
There are not enough homes for all the animals that are born every year. Adopting from a shelter helps weaken the pet overpopulation cycle. Each year 8 to 12 million dogs, cats, puppies and kittens are euthanized because there are simply not enough homes for them.    
    
    
Our shelter offers a variety that you won’t find anywhere else. We have specific breeds and also the greatest mutts you’ll ever find. We have more than 6,000 animals come through our doors every year.If around 1% people will come up then each and every pets will be adopted,their live will be in the safe hand. 
    
    
    
    </p>
  </ReactBootStrap.Modal.Body>

 {/* <ReactBootStrap.Modal.Footer> 
    <ReactBootStrap.Button
      className="btn btn-success"
      variant="primary"
      href="/about"
    >
      About
    </ReactBootStrap.Button>
  </ReactBootStrap.Modal.Footer> */}
</ReactBootStrap.Modal.Dialog>

</div>

                  </div>
                  {/* <div className="row">
                  <div className="col-4">

                  </div>
                      <div className = "col-4 donatebutton">
                      <ReactBootStrap.Button
                        className="btn btn-primary"
                        variant="primary"
                        href="https://rzp.io/l/68IC5Nb"
                        size="lg"
                      >
                        Donate
                      </ReactBootStrap.Button>
                      </div>
                      <div className="col-4">

                      </div>
                      </div> */}



                  </div>







                  {/* <ReactBootStrap.Modal.Footer> */}
                  
              
              
                      {/* </ReactBootStrap.Modal.Footer> */}




<div className="hello"
  style={{ padding: "50px",marginbottom: "100px" }}>
                  <ReactBootStrap.CardGroup style={hey}>
                    <ReactBootStrap.Card style={margin2}>
                      <ReactBootStrap.Card.Img variant="top" src={i3} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Critical Medical Care
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          There are so many animals day in & day out that are
                          subjected to cruelty, road rage and medical concerns.
                          Karma Foundation works towards helping such animals
                          either in our OPD or by admitting them into our
                          facility. Our current set-up in Pune City is our pilot
                          model. We plan to expand our horizon by working on
                          building a larger unit for farm animals, a sanctuary
                          for the old and discarded and a shelter home for the
                          ones who cannot survive on the streets of the citya
                          sanctuary for the old. stray animals at our OPD
                          clinic.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                        className="bottom"
                          href="https://www.karmafoundation.ngo/"
                          variant="primary"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={margin2}>
                      <ReactBootStrap.Card.Img variant="top" src={i1} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Animal Birth Control (ABC)
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          Karma foundation truly believes that the best way to
                          reduce human - animal conflict & animal – animal
                          conflict is birth control. We conduct ABC surgeries
                          each day at our facility & keep the animal for Post
                          Operative care until they are fit to be released back
                          where they were picked up from.Our current set-up in
                          Pune City is our pilot model. We plan to expand our
                          horizon by working on building a larger unit for farm
                          animals, a sanctuary for the old and discarded and a
                          shelter home for the ones who cannot survive on the
                          streets of the city.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                        className="bottom"
                          href="https://www.karmafoundation.ngo/"
                          variant="primary"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={margin2}>
                      <ReactBootStrap.Card.Img variant="top" src={i2} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Out Patient Department (OPD service)
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          Our OPD is a facility that is responsible for
                          providing prevention, cure, and alleviation of
                          diseases and pain. Our OPD clinic is a fully
                          functional facility which is equipped to handle
                          critical emergencies. We offer free treatment for
                          stray animals at our OPD clinic. Each day we attend to
                          number of patients who are victims of cruelty, road
                          accidents and who suffer from various illnesses. Our
                          partner, Animal Care Clinic has been generous by
                          extending their support towards our cause.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                        className="bottom"
                          variant="primary"
                          href="https://www.karmafoundation.ngo/"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                  </ReactBootStrap.CardGroup>
                  </div>
                  {/* <section>
                    <div className="text-center">
                      <h2>Contact Us</h2>
                      <div style={margin}>
                        <a href="https://www.linkedin.com/signup">
                          <img style={size} src={img4} />
                        </a>
                        <a style={size} href="https://www.facebook.com/">
                          <img style={size} src={img7} />
                        </a>
                        <a href="https://twitter.com/?lang=en">
                          <img style={size} src={img8} />
                        </a>
                        <a href="https://www.youtube.com/">
                          <img style={size} src={img9} />
                        </a>
                      </div>
                    </div>
                  </section> */}
                </>
              }
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>

          <footer className="bg-dark">
            <div className="container-fluid py-5">
              <div className="row text-center">
                <div className="col-md-4 ">
                  {/* <hr className="light" style={light} /> */}
                  <h5 style={light}>Contact Us</h5>
                  {/* <hr className="light" style={light} /> */}
                  <p style={light}>(+91) 9026776613</p>
                  <p style={light}>alakhdeepsingh773@gmail.com</p>
                </div>


<div className="col-md-4" >
          
                    <div className="text-center">
                      <h2 style={light}>Social Media</h2>
                      <div style={margin}>
                        <a href="https://www.linkedin.com/in/alakhdeepsingh/">
                          <img style={size} alt="hello" src={img4} />
                        </a>
                        <a style={size} href="https://www.facebook.com/karmaanimalfoundation/">
                          <img style={size} alt="hello" src={img7} />
                        </a>
                        <a href="https://twitter.com/KarmaForAnimals">
                          <img style={size} alt="hello" src={img8} />
                        </a>
                        <a href="https://www.youtube.com/">
                          <img style={size} alt="hello" src={img9} />
                        </a>
                      </div>
                    </div>
                  
</div>






                <div className="col-md-4">
                  {/* <hr className="light" style={light} /> */}
                  <h5 style={light}>Visit the website</h5>
                  {/* <hr className="light" style={light} /> */}
                  <a className = "hi" href="https://www.pawsindia.org/">
                    <p style={light}> PawsIndia</p>
                  </a>
                  <a className = "hi" href="https://www.scoopwhoop.com/ngos-for-animals/">
                    <p style={light}>NGOs for Animals</p>
                  </a>
                </div>
                <div className="col-12">
                  <hr className="light-100" style={light} />
                  <h5 style={light}>&copy; AnimalNGO.org</h5>
                  <h6 style={light}>Developer Contact</h6>
             
                </div>
                
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
