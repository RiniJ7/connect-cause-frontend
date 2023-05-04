// links to home page

import React from "react";
import "./Home.css";
import img from "../assets/CONNECT CAUSE.png";

const HomePage = () => {
  return (
    <div className="home-page">
      <div>
        <img style={{ width: "400px" }} src={img} />
      </div>
      <div>
        <p class="center-align"></p>
        <h1>Welcome to Connect Cause</h1>
        <h2></h2>

        <p>
          Our mission is to help you find the perfect volunteer opportunity that
          matches your passion and goals
        </p>
        <p>
          We understand that volunteering is not only about giving back to the
          community, but it's also a way to connect with like-minded people,
          develop new skills, and grow personally and professionally.
        </p>
        <p>
          Our platform offers a user-friendly interface that allows you to
          search for volunteer opportunities based on your interests, location,
          and availability.
        </p>
        <p>
          {" "}
          At Connect Cause we believe that volunteering should be accessible to
          everyone, regardless of their background or experience. That's why we
          partner with a diverse range of organizations, from large non-profits
          to small community-based groups to provide you with a variety of
          opportunities to choose from.
        </p>
        <p>
          Join our community of volunteers and start your journey towards
          creating a better world today!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
