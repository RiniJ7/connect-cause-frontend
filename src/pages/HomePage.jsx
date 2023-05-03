// links to home page

import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* importing home page image */}
        <img src="https://media.istockphoto.com/id/888343166/photo/make-this-world-a-brighter-place.jpg?s=612x612&w=0&k=20&c=6MQkcSUhlqeNby6OhsrUhMh0Z-dUB3OUc3JDk9NwB0A=" alt="homeimage" width="500" height="333"></img>
      <h1>About us</h1>
      <div>
        <div className="home-page">
          <div className="form-container">
            <p>
              We are a charity that has been on the forefront of community
              building in Calgary. We are committed to providing digital
              solutions for volunteer engagement. We understand that volunteers
              need to be engaged in a way that is consistent to their interests
              and values.
            </p>
          </div>
        </div>
        <div>What Makes us Special</div>
      </div>
    </div>
  );
};

export default HomePage;
