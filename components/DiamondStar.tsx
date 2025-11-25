import React from "react";

type DiamondStarProps = {
  className?: string;
};

const DiamondStar: React.FC<DiamondStarProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
  </svg>
);

export default DiamondStar;
