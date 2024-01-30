import React from "react";
import PropTypes from 'prop-types'; 

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  return (
    <>
      {options.map((option) => {
        return (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes ={
  options: PropTypes.array
}

export default FeedbackOptions;