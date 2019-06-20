import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.svg`
  fill: '#FF0000';
  width: ${props => props.svgWidth}px;
  height: ${props => props.svgHeight}px;
`;

const Logo = ({ height = 47, width = 60, className }) => {
  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      svgHeight={height}
      svgWidth={width}
      className={className}
    >
      <path d="M0 0h80v80H0z" fill="#fff" />
      <path
        d="M59.1 41.51l-4.37-12.85a3.47 3.47 0 0 0-2.07-2.3 5.49 5.49 0 0 0-3.42-.25.87.87 0 0 0-.65 1.05.87.87 0 0 0 1 .66 3.7 3.7 0 0 1 2.32.14 1.73 1.73 0 0 1 1.07 1.15l3.07 9a8.56 8.56 0 0 0-4.76-1.44 8.65 8.65 0 0 0-8.55 7.44 10.21 10.21 0 0 0-2.88-.41 9.4 9.4 0 0 0-2.71.39 8.65 8.65 0 0 0-8.55-7.42 8.61 8.61 0 0 0-4.83 1.48l3.06-9v-.08a1.74 1.74 0 0 1 1.08-1.15 3.66 3.66 0 0 1 2.31-.14.87.87 0 0 0 1-.65.88.88 0 0 0-.65-1.06 5.5 5.5 0 0 0-3.42.25 3.47 3.47 0 0 0-2.07 2.3l-4.2 12.89a.67.67 0 0 0 0 .24 8.46 8.46 0 0 0-.79 3.59 8.66 8.66 0 0 0 8.65 8.65 8.66 8.66 0 0 0 8.62-8.07 7.44 7.44 0 0 1 2.52-.41 8.56 8.56 0 0 1 2.81.47 8.65 8.65 0 0 0 8.62 8.05 8.67 8.67 0 0 0 8.66-8.65 8.58 8.58 0 0 0-.88-3.78zM28.65 52.24a6.91 6.91 0 0 1-6.9-6.9 6.9 6.9 0 0 1 6.9-6.9 6.91 6.91 0 0 1 6.9 6.9 6.91 6.91 0 0 1-6.9 6.93zm22.69 0a6.91 6.91 0 0 1-6.9-6.9 6.91 6.91 0 0 1 6.9-6.9 6.9 6.9 0 0 1 6.9 6.9 6.91 6.91 0 0 1-6.9 6.93z"
        fill="#000"
      />
    </Wrapper>
  );
};

export default Logo;
