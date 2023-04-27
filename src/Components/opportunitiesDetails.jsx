import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OpportunityDetails = ({ opportunityId }) => {
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    const fetchOpportunity = async () => {
      const response = await axios.get(`/opportunities/${opportunityId}`);
      setOpportunity(response.data);
    };
    fetchOpportunity();
  }, [opportunityId]);

  if (!opportunity) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{opportunity.name}</h2>
      <p>{opportunity.description}</p>
      <p>{opportunity.location}</p>
      <p>Start date: {opportunity.startDate}</p>
      <p>End date: {opportunity.endDate}</p>
    </div>
  );
};

export default OpportunityDetails; 