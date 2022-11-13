import React from 'react';

export default function GetApp({ width = '24px', height = '24px', ...props }: { [x: string]: any, width: string, height: string }) {
  return <svg width={ width } height={ height } { ...props } viewBox='0 0 24 24'>
    <path fill='currentColor' d='M13,5v6h1.17L12,13.17 9.83,11L11,11L11,5h2m2,-2L9,3v6L5,9l7,7 7,-7h-4L15,3zM19,18L5,18v2h14v-2z' />
  </svg>
}