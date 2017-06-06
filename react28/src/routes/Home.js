import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
        <Link to={"/Create"}>Update Rosters</Link>
        <br />
        <Link to={"/Teams"}>Review All Rosters</Link>
        <p className="App App-intro">
          The Atlantic Coast Conference is the premier academic and athletic conference in the United States. Get to know the schools and programs in depth.
        </p>
        <div className="album text-muted">
          <div className="container">
            <div className="row">
              <div className="card">
                <img data-src="holder.js/100px280/thumb"
                  alt="100%x280"
                  style={{height: '30%', width: '30%', display:'block'}}
                  src="http://www.interbasket.net/news/wp-content/uploads/michael-jordan-north-carolina-tarheel-college-stats.jpg"
                  data-holder-rendered='true' />
                <p className='card-text'>
                  Michael Jordan is widely regarded as the greatest basketball player of all time. He was the third overall selection in the NBA draft by the Chicago Bulls and he won 6 NBA championships. Before that, he made the game winning shot to win the national championship while a freshman at the University of North Carolina.
                </p>
              </div>
              <div className="card">
                <img data-src="holder.js/100px280/thumb"
                  alt="100%x280"
                  style={{height: '30%', width: '30%', display:'block'}}
                  src= "http://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/0/d3/0d3024d5-bbc5-54af-9e3d-c35ed8accd55/50f454a6c7822.image.jpg"
                  data-holder-rendered='true' />
                <p className='card-text'>
                  Jeff Lamp led UVa to its firt ACC tournament championship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
