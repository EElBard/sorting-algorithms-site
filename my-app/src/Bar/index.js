import './index.scss';
import { useState } from 'react';

const Bar = ({ height, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const barStyle = {
    height: height,
    backgroundColor: isHovered ? 'blue' : color, // Change color on hover
  };

  const formattedHeight = height.replace(/(\.\d+)?%$/, '');  

  return (
    <>
      <div
        className="bar"
        style={barStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && <div className="height-display">{formattedHeight}</div>}
      </div>
    </>
  );
};

export default Bar;
