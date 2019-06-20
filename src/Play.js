import React from 'react';

const Play = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      height="60"
      width="60"
      style={{ display: 'block', cursor: 'pointer' }}
      onClick={onClick}
    >
      <path d="M60 0v60H0V15A15 15 0 0 1 15 0h45z" fill="#fff" />
      <path d="M19.8 18.22v23.54L40.21 30z" fill="#000" />
    </svg>
  );
};

export default Play;
