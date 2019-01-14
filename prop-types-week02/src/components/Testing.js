import React from "react";
import PropTypes from "prop-types";

const Testing = ({ data }) => {
  return (
    <div>
      <h1>{data.testing}</h1>
    </div>
  );
};

Testing.propTypes = {
  data: PropTypes.object
};

export default Testing;
