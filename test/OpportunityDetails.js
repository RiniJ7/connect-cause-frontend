import React, { useState, useEffect } from 'react';
import OpportunityDetails from './OpportunityDetails.js';

const InterestedOpportunities = ({ userId }) => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const response = await fetch(`/api/volunteeringOpportunities?userId=${userId}`);
      const data = await response.json();
      setOpportunities(data);
    };
    fetchOpportunities();
  }, [userId]);

  return (
    <div>
      <h2>Volunteering Opportunities I'm Interested In:</h2>
      {opportunities.map((opportunity) => (
        <OpportunityDetails key={opportunity._id} opportunityId={opportunity._id} />
      ))}
    </div>
  );
};

export default InterestedOpportunities;
