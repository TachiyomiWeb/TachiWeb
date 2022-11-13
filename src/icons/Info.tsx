import React from 'react';

export default function Info({ width = '24px', height = '24px', ...props }: { [x: string]: any, width: string, height: string }) {
  return <svg width={ width } height={ height } { ...props } viewBox='0 0 24 24'>
    <path fill='currentColor' d='M11,7h2v2h-2zM11,11h2v6h-2zM12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2zM12,20c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8 8,3.59 8,8 -3.59,8 -8,8z' />
  </svg>
}