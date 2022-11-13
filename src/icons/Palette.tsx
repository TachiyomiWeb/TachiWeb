import React from 'react';

export default function Palette({ width = '24px', height = '24px', ...props }: { [x: string]: any, width: string, height: string }) {
  return <svg width={ width } height={ height } { ...props } viewBox='0 0 24 24'>
    <path fill='currentColor' d='M12,22C6.49,22 2,17.51 2,12S6.49,2 12,2s10,4.04 10,9c0,3.31 -2.69,6 -6,6h-1.77c-0.28,0 -0.5,0.22 -0.5,0.5 0,0.12 0.05,0.23 0.13,0.33 0.41,0.47 0.64,1.06 0.64,1.67 0,1.38 -1.12,2.5 -2.5,2.5zM12,4c-4.41,0 -8,3.59 -8,8s3.59,8 8,8c0.28,0 0.5,-0.22 0.5,-0.5 0,-0.16 -0.08,-0.28 -0.14,-0.35 -0.41,-0.46 -0.63,-1.05 -0.63,-1.65 0,-1.38 1.12,-2.5 2.5,-2.5L16,15c2.21,0 4,-1.79 4,-4 0,-3.86 -3.59,-7 -8,-7z' />
    <path fill='currentColor' d='M6.5,11.5m-1.5,0a1.5,1.5 0,1 1,3 0a1.5,1.5 0,1 1,-3 0' />
    <path fill='currentColor' d='M9.5,7.5m-1.5,0a1.5,1.5 0,1 1,3 0a1.5,1.5 0,1 1,-3 0' />
    <path fill='currentColor' d='M14.5,7.5m-1.5,0a1.5,1.5 0,1 1,3 0a1.5,1.5 0,1 1,-3 0' />
    <path fill='currentColor' d='M17.5,11.5m-1.5,0a1.5,1.5 0,1 1,3 0a1.5,1.5 0,1 1,-3 0' />
  </svg>
}