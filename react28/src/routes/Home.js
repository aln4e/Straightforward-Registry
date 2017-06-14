import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <div>

        <Jumbotron>
          <h1>The Atlantic Coast Conference!</h1>
          <p>The real conference of champions and legends</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>

        <Grid>
           <Row className="show-grid">
             <Col xs={6} md={4}>
               <img
                 className = 'homePlayers'
                 alt="MJ"
                 src="http://www.interbasket.net/news/wp-content/uploads/michael-jordan-north-carolina-tarheel-college-stats.jpg"
               />
               <p>
                 Michael Jordan is widely regarded as the greatest basketball player of all time. He was the third overall selection in the NBA draft by the Chicago Bulls and he won 6 NBA championships. Before that, he made the game winning shot to win the national championship while a freshman at the University of North Carolina.
               </p>
             </Col>
             <Col xs={6} md={4}>
               <img
                 className = 'homePlayers'
                 alt="Lamp"
                 src= "http://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/0/d3/0d3024d5-bbc5-54af-9e3d-c35ed8accd55/50f454a6c7822.image.jpg"
                 />
               <p>
                 ots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words                 </p>
             </Col>
             <Col xsHidden md={4}>
               <img
                 className = 'homePlayers'
                 alt="Redick"
                 src= "http://www.unsportsmanlike-conduct.com/uploads/3/9/1/5/39153357/5123294_orig.jpg"
                 />
               <p>
                 ots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words
               </p>
             </Col>
           </Row>

           <hr />

           <Row className="show-grid">
             <Col xs={6} md={4}>Coach 1</Col>
             <Col xs={6} md={4}>Coach 2</Col>
             <Col xsHidden md={4}>Coach 3</Col>
           </Row>
         </Grid>

         <Link to={"/Create"}>Update Rosters</Link>
         <br />
         <Link to={"/Teams"}>Review All Rosters</Link>

      </div>
    );
  }
}

export default Home;
