'use client';

import React from 'react';

interface ShapeVisualizerProps {
  type:
    | 'square'
    | 'cube'
    | 'circle'
    | 'cylinder'
    | 'sphere'
    | 'rightTriangle'
    | 'isoscelesTriangle'
    | 'equilateralTriangle'
    | 'obtuseTriangle';
  highlightColor?: string;
  accentColor?: string;
}

export default function ShapeVisualizer({
  type,
  highlightColor = '#53C03F',
  accentColor = '#333',
}: ShapeVisualizerProps) {
  const baseColor = highlightColor;
  const secondaryColor = accentColor;
  const strokeWidth = 2;

  // Set size constraints
  const size = 250;
  const center = size / 2;

  const renderShape = () => {
    switch (type) {
      case 'square':
        const squareSize = 160;
        const squareX = (size - squareSize) / 2;
        const squareY = (size - squareSize) / 2;

        return (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="max-w-full"
          >
            {/* Draw the square */}
            <rect
              x={squareX}
              y={squareY}
              width={squareSize}
              height={squareSize}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Label the sides with 's' */}
            <text
              x={center}
              y={squareY - 10}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              s
            </text>

            <text
              x={squareX - 10}
              y={center}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              s
            </text>

            {/* Area label */}
            <text
              x={center}
              y={center}
              textAnchor="middle"
              fontSize="16"
              fill="white"
            >
              Area = s²
            </text>
          </svg>
        );

      case 'cube':
        const cubeSize = 120;
        const offset = 40;
        const frontX = center - cubeSize / 2;
        const frontY = center - cubeSize / 2 + offset / 2;

        return (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="max-w-full"
          >
            {/* Front face */}
            <rect
              x={frontX}
              y={frontY}
              width={cubeSize}
              height={cubeSize}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Top face */}
            <path
              d={`M${frontX},${frontY} l${offset},-${offset} h${cubeSize} v${cubeSize} l-${offset},${offset} z`}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Side face */}
            <path
              d={`M${frontX + cubeSize},${frontY} l${offset},-${offset} v${cubeSize} l-${offset},${offset} z`}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Label */}
            <text
              x={frontX + cubeSize / 2}
              y={frontY + cubeSize / 2}
              textAnchor="middle"
              fontSize="16"
              fill="white"
            >
              s³
            </text>

            {/* Side labels */}
            <text
              x={frontX + cubeSize / 2}
              y={frontY + cubeSize + 20}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              s
            </text>

            <text
              x={frontX - 15}
              y={frontY + cubeSize / 2}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              s
            </text>
          </svg>
        );

      case 'circle':
        const radius = 80;

        return (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="max-w-full"
          >
            {/* Draw the circle */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Draw a radius line */}
            <line
              x1={center}
              y1={center}
              x2={center + radius}
              y2={center}
              stroke={baseColor}
              strokeWidth={strokeWidth}
            />

            {/* Label the radius */}
            <text
              x={center + radius / 2}
              y={center - 10}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              r
            </text>

            {/* Area label */}
            <text
              x={center}
              y={center + 5}
              textAnchor="middle"
              fontSize="16"
              fill="white"
            >
              πr²
            </text>
          </svg>
        );

      case 'cylinder':
        const cylinderRadius = 70;
        const cylinderHeight = 140;
        const cylinderTopY = center - cylinderHeight / 2;
        const cylinderBottomY = center + cylinderHeight / 2;

        return (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="max-w-full"
          >
            {/* Top ellipse */}
            <ellipse
              cx={center}
              cy={cylinderTopY}
              rx={cylinderRadius}
              ry={cylinderRadius / 3}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Bottom ellipse */}
            <ellipse
              cx={center}
              cy={cylinderBottomY}
              rx={cylinderRadius}
              ry={cylinderRadius / 3}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Left side line */}
            <line
              x1={center - cylinderRadius}
              y1={cylinderTopY}
              x2={center - cylinderRadius}
              y2={cylinderBottomY}
              stroke={baseColor}
              strokeWidth={strokeWidth}
            />

            {/* Right side line */}
            <line
              x1={center + cylinderRadius}
              y1={cylinderTopY}
              x2={center + cylinderRadius}
              y2={cylinderBottomY}
              stroke={baseColor}
              strokeWidth={strokeWidth}
            />

            {/* Radius indicator */}
            <line
              x1={center}
              y1={cylinderTopY}
              x2={center + cylinderRadius}
              y2={cylinderTopY}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              strokeDasharray="4"
            />

            {/* Height indicator */}
            <line
              x1={center + cylinderRadius + 15}
              y1={cylinderTopY}
              x2={center + cylinderRadius + 15}
              y2={cylinderBottomY}
              stroke={baseColor}
              strokeWidth={strokeWidth}
            />

            {/* Labels */}
            <text
              x={center + cylinderRadius / 2}
              y={cylinderTopY - 10}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              r
            </text>

            <text
              x={center + cylinderRadius + 30}
              y={center}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              h
            </text>

            {/* Volume formula */}
            <text
              x={center}
              y={center}
              textAnchor="middle"
              fontSize="16"
              fill="white"
            >
              πr²h
            </text>
          </svg>
        );

      case 'sphere':
        const sphereRadius = 80;

        return (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="max-w-full"
          >
            {/* Draw the sphere (circle with some shading) */}
            <circle
              cx={center}
              cy={center}
              r={sphereRadius}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Add an ellipse for 3D effect */}
            <ellipse
              cx={center}
              cy={center}
              rx={sphereRadius}
              ry={sphereRadius / 3}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
              transform={`rotate(-30, ${center}, ${center})`}
            />

            {/* Draw a radius line */}
            <line
              x1={center}
              y1={center}
              x2={center + sphereRadius * Math.cos(Math.PI / 6)}
              y2={center - sphereRadius * Math.sin(Math.PI / 6)}
              stroke={baseColor}
              strokeWidth={strokeWidth}
            />

            {/* Label the radius */}
            <text
              x={center + (sphereRadius / 2) * Math.cos(Math.PI / 6)}
              y={center - (sphereRadius / 2) * Math.sin(Math.PI / 6) - 10}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              r
            </text>

            {/* Volume label */}
            <text
              x={center}
              y={center + 5}
              textAnchor="middle"
              fontSize="16"
              fill="white"
            >
              (4/3)πr³
            </text>
          </svg>
        );

      case 'rightTriangle':
        const rtBase = 160;
        const rtHeight = 120;
        const rtX = (size - rtBase) / 2;
        const rtY = center + rtHeight / 2;

        return (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="max-w-full"
          >
            {/* Draw the right triangle */}
            <polygon
              points={`${rtX},${rtY} ${rtX + rtBase},${rtY} ${rtX},${rtY - rtHeight}`}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Draw the right angle marker */}
            <path
              d={`M${rtX + 20},${rtY} L${rtX + 20},${rtY - 20} L${rtX},${rtY - 20}`}
              stroke={baseColor}
              strokeWidth={1.5}
              fill="none"
            />

            {/* Label the sides */}
            <text
              x={rtX + rtBase / 2}
              y={rtY + 20}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              a
            </text>

            <text
              x={rtX - 15}
              y={rtY - rtHeight / 2}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              b
            </text>

            <text
              x={rtX + rtBase / 2 - 15}
              y={rtY - rtHeight / 2 - 5}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              c
            </text>

            {/* Pythagorean theorem */}
            <text
              x={center}
              y={center - 40}
              textAnchor="middle"
              fontSize="16"
              fill="white"
            >
              a² + b² = c²
            </text>
          </svg>
        );

      case 'isoscelesTriangle':
        const itBase = 160;
        const itHeight = 120;
        const itX = center - itBase / 2;
        const itY = center + itHeight / 2;

        return (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="max-w-full"
          >
            {/* Draw the isosceles triangle */}
            <polygon
              points={`${itX},${itY} ${itX + itBase},${itY} ${center},${itY - itHeight}`}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Draw 45° angle markers */}
            <path
              d={`M${itX + 20},${itY} A 20 20 0 0 1 ${itX + 10},${itY - 15}`}
              stroke={baseColor}
              strokeWidth={1.5}
              fill="none"
            />

            <path
              d={`M${itX + itBase - 20},${itY} A 20 20 0 0 0 ${itX + itBase - 10},${itY - 15}`}
              stroke={baseColor}
              strokeWidth={1.5}
              fill="none"
            />

            {/* 45° labels */}
            <text
              x={itX + 15}
              y={itY - 25}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              45°
            </text>

            <text
              x={itX + itBase - 15}
              y={itY - 25}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              45°
            </text>

            {/* Label the sides */}
            <text
              x={center}
              y={itY + 20}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              a
            </text>

            <text
              x={center + itBase / 4}
              y={center - 5}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              b
            </text>

            <text
              x={center - itBase / 4}
              y={center - 5}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              b
            </text>

            {/* Formula */}
            <text
              x={center}
              y={center - 40}
              textAnchor="middle"
              fontSize="16"
              fill="white"
            >
              a = b√2
            </text>
          </svg>
        );

      case 'equilateralTriangle':
        const etSide = 160;
        const etHeight = (Math.sqrt(3) / 2) * etSide;
        const etX = center - etSide / 2;
        const etY = center + etHeight / 2 - 20;

        return (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="max-w-full"
          >
            {/* Draw the equilateral triangle */}
            <polygon
              points={`${etX},${etY} ${etX + etSide},${etY} ${center},${etY - etHeight}`}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Draw 60° angle markers */}
            <path
              d={`M${etX + 20},${etY} A 20 20 0 0 1 ${etX + 10},${etY - 17}`}
              stroke={baseColor}
              strokeWidth={1.5}
              fill="none"
            />

            <path
              d={`M${etX + etSide - 20},${etY} A 20 20 0 0 0 ${etX + etSide - 10},${etY - 17}`}
              stroke={baseColor}
              strokeWidth={1.5}
              fill="none"
            />

            <path
              d={`M${center - 10},${etY - etHeight + 17} A 20 20 0 0 0 ${center + 10},${etY - etHeight + 17}`}
              stroke={baseColor}
              strokeWidth={1.5}
              fill="none"
            />

            {/* 60° labels */}
            <text
              x={etX + 15}
              y={etY - 25}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              60°
            </text>

            <text
              x={etX + etSide - 15}
              y={etY - 25}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              60°
            </text>

            <text
              x={center}
              y={etY - etHeight + 40}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              60°
            </text>

            {/* Label the sides */}
            <text
              x={center}
              y={etY + 20}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              a
            </text>

            <text
              x={center + etSide / 4 + 10}
              y={center - 20}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              a
            </text>

            <text
              x={center - etSide / 4 - 10}
              y={center - 20}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              a
            </text>

            {/* Area formula */}
            <text
              x={center}
              y={center + 20}
              textAnchor="middle"
              fontSize="16"
              fill="white"
            >
              Area = (√3/4)a²
            </text>
          </svg>
        );

      case 'obtuseTriangle':
        // Create an isosceles triangle with angles 120°, 30°, 30°
        const otWidth = 180;
        const otHeight = 80;
        const otX = center - otWidth / 2;
        const otY = center + otHeight / 2;

        // The apex needs to be on the opposite side from the base to create the 120° angle
        const otApexX = center;
        const otApexY = otY - otHeight * 1.5;

        return (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="max-w-full"
          >
            {/* Draw the obtuse triangle */}
            <polygon
              points={`${otX},${otY} ${otX + otWidth},${otY} ${otApexX},${otApexY}`}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Draw angle markers */}
            {/* 120° angle at the top */}
            <path
              d={`M${otApexX - 20},${otApexY + 10} A 20 20 0 0 0 ${otApexX + 20},${otApexY + 10}`}
              stroke={baseColor}
              strokeWidth={1.5}
              fill="none"
            />

            {/* 30° angles at the bottom */}
            <path
              d={`M${otX + 20},${otY} A 20 20 0 0 1 ${otX + 20},${otY - 10}`}
              stroke={baseColor}
              strokeWidth={1.5}
              fill="none"
            />

            <path
              d={`M${otX + otWidth - 20},${otY} A 20 20 0 0 0 ${otX + otWidth - 20},${otY - 10}`}
              stroke={baseColor}
              strokeWidth={1.5}
              fill="none"
            />

            {/* Angle labels */}
            <text
              x={otApexX}
              y={otApexY + 25}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              120°
            </text>

            <text
              x={otX + 15}
              y={otY - 15}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              30°
            </text>

            <text
              x={otX + otWidth - 15}
              y={otY - 15}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              30°
            </text>

            {/* Label the sides */}
            <text
              x={center}
              y={otY + 20}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              a
            </text>

            <text
              x={center - otWidth / 4 - 5}
              y={center}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              b
            </text>

            <text
              x={center + otWidth / 4 + 5}
              y={center}
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              b
            </text>

            {/* Law of cosines for this triangle */}
            <text
              x={center}
              y={center - 40}
              textAnchor="middle"
              fontSize="16"
              fill="white"
            >
              a² = 2b² - 2b²cos(120°)
            </text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg bg-black p-4">
      {renderShape()}
    </div>
  );
}
