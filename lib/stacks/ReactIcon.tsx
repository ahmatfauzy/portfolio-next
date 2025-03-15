import React from "react";

function ReactIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="10" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="4" fill="none">
        <ellipse cx="64" cy="64" rx="60" ry="30" transform="rotate(0,64,64)" />
        <ellipse cx="64" cy="64" rx="60" ry="30" transform="rotate(60,64,64)" />
        <ellipse cx="64" cy="64" rx="60" ry="30" transform="rotate(120,64,64)" />
      </g>
    </svg>
  );
}

export default ReactIcon;