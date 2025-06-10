import React from 'react';

const CustomButton = ({ children, onClick, type = 'submit' }) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;
