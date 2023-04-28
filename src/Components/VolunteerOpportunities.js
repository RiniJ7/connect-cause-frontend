import React, { useState, useEffect } from "react";

const VolunteerOpportunities = () => {
  // Define state variables using the useState hook
  const [opportunities, setOpportunities] = useState([]);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [interestedInOpportunities, setInterestedInOpportunities] = useState([]);

  // Fetch data from the server using the useEffect hook
  useEffect(() => {
    fetch("/api/opportunities")
      .then((res) => res.json())
      .then((data) => setOpportunities(data))
      .catch((error) => console.log(error));
  }, []);

  // Define helper functions
  const viewOpportunityDetails = (opportunity) => {
    setSelectedOpportunity(opportunity);
  };

  const markInterestedInOpportunity = (opportunity) => {
    setInterestedInOpportunities([...interestedInOpportunities, opportunity]);
  };

  // Define rendering functions
  const renderOpportunityDetails = () => {
    if (selectedOpportunity) {
      return (
        <div>
          <h3>{selectedOpportunity.position_name}</h3>
          <p>{selectedOpportunity.description}</p>
          <button onClick={() => markInterestedInOpportunity(selectedOpportunity)}>
            Mark as Interested In
          </button>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderOpportunities = () => {
    return opportunities.map((opportunity) => {
      return (
        <div key={opportunity._id}>
          <h2>{opportunity.position_name}</h2>
          <p>{opportunity.description}</p>
          <button onClick={() => viewOpportunityDetails(opportunity)}>
            View Details
          </button>
        </div>
      );
    });
  };

  const renderInterestedInOpportunities = () => {
    return interestedInOpportunities.map((opportunity) => {
      return (
        <div key={opportunity._id}>
          <h2>{opportunity.position_name}</h2>
          <p>{opportunity.description}</p>
        </div>
      );
    });
  };

  // Render the component
  return (
    <div>
      <h1>Volunteer Opportunities</h1>
      <div>
        <h2>Opportunities</h2>
        {renderOpportunities()}
      </div>
      <div>
        <h2>Interested In</h2>
        {renderInterestedInOpportunities()}
      </div>
      <div>
        <h2>Opportunity Details</h2>
        {renderOpportunityDetails()}
      </div>
    </div>
  );
};

export default VolunteerOpportunities;
