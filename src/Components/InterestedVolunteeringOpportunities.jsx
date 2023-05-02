import React, { useState } from "react"; // Import React and useState hook
import PropTypes from "prop-types"; // Import PropTypes for props validation

const InterestedVolunteeringOpportunities = (props) => {
  // Define component with opportunities prop

  const [sortOption, setSortOption] = useState("all"); // Initialize state for sort option and its setter
  const [opportunities, setOpportunities] = useState([]);

  const handleSortOptionChange = (e) => {
    // Define event handler for sort option change
    setSortOption(e.target.value); // Update sort option state with new value
  };

  const sortOpportunities = (opportunities) => {
    // Define function to sort opportunities based on sort option state
    if (sortOption === "matchedInterests") {
      // If sort option is matchedInterests
      // Sort by matched interests (descending order)
      return opportunities.sort((a, b) => b.matched_interests - a.matched_interests);
    } else if (sortOption === "mostRecent") {
      // If sort option is mostRecent
      // Sort by most recent (descending order)
      return opportunities.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else {
      // If sort option is all or any other value
      // Do not sort and return the original array (default)
      return opportunities;
    }
  };

  const sortedOpportunities = sortOpportunities(opportunities); // Sort opportunities based on sort option state

  return (
    <div>
      <h2>Interested Volunteering Opportunities:</h2>
      <div>
        <label>
          Sort by:
          <select value={sortOption} onChange={handleSortOptionChange}>
            <option value="all">All</option>
            <option value="matchedInterests">Matched Interests</option>
            <option value="mostRecent">Most Recent</option>
          </select>
        </label>
      </div>
      {sortedOpportunities.length > 0 ? ( // If there are sorted opportunities
        sortedOpportunities.map(
          (
            opportunity // Map over the sorted opportunities
          ) => (
            <div key={opportunity.position_name}>
              <h3>{opportunity.position_name}</h3>
              <p>{opportunity.description}</p>
              <p>Requirements: {opportunity.requirements}</p>
              <p>Qualifications: {opportunity.qualifications}</p>
            </div>
          )
        )
      ) : (
        <p>No interested volunteering opportunities</p> // Otherwise, display a message indicating no opportunities
      )}
    </div>
  );
};

// InterestedVolunteeringOpportunities.propTypes = {
//   // Define propTypes for the component
//   opportunities: PropTypes.array.isRequired, // opportunities prop is an array and is required
// };

export default InterestedVolunteeringOpportunities; // Export the component as default
