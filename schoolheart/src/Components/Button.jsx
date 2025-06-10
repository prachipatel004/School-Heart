import React from 'react';

const CustomButton = ({ children, padding = '10px 20px', onClick, type = 'submit' }) => {
  return (
    <button
      className="custom-button"
      style={{ padding }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;
