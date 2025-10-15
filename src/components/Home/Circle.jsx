import React from 'react';
import "./Home.css"

const SPOKE_COUNT = 8;
const CENTER_X = 200;
const CENTER_Y = 200;
const CENTER_RADIUS = 70;
const SPOKE_LENGTH = 100; 
const NODE_RADIUS = 30;

import logo from "../assets/logo2.png";

export default function HubSpoke() {
  const spokes = Array.from({ length: SPOKE_COUNT }, (_, i) => {
    const angle = (2 * Math.PI * i) / SPOKE_COUNT;
    const fromX = CENTER_X + CENTER_RADIUS * Math.cos(angle);
    const fromY = CENTER_Y + CENTER_RADIUS * Math.sin(angle);
    const toX = CENTER_X + (CENTER_RADIUS + SPOKE_LENGTH) * Math.cos(angle);
    const toY = CENTER_Y + (CENTER_RADIUS + SPOKE_LENGTH) * Math.sin(angle);
    return { fromX, fromY, toX, toY };
  });

  return (
    <div style={{ position: 'relative', width: 420, height: 400 }}>
      <svg width="420" height="400" style={{ background: 'red' }} className='cov'>
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={CENTER_RADIUS}
          fill="#eee"
          stroke="black"
          strokeWidth="3"
        />
        {spokes.map((pt, i) => (
          <g key={i}>
            <line
              x1={pt.fromX}
              y1={pt.fromY}
              x2={pt.toX}
              y2={pt.toY}
              stroke="black"
              strokeWidth="2"
            />
            <circle
              cx={pt.toX}
              cy={pt.toY}
              r={NODE_RADIUS}
              fill="#fafafa"
              stroke="black"
              strokeWidth="2"
            />
          </g>
        ))}
      </svg>
      {/* Absolutely positioned image over the SVG center */}
      <img
        src={logo}
        alt="center logo"
        style={{
          position: 'absolute',
          left: CENTER_X - 40,
          top: CENTER_Y - 40,
          width: 80,
          height: 80,
          borderRadius: '50%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
