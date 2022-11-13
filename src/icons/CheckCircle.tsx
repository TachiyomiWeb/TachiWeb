import React from 'react';

export default function CheckCircle({ width = '24px', height = '24px', ...props }: { [x: string]: any, width: string, height: string }) {
  return <svg width={ width } height={ height } { ...props } viewBox='0 0 24 24'>
    <path fill='currentColor' d='M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2zM10,17l-5,-5 1.41,-1.41L10,14.17l7.59,-7.59L19,8l-9,9z' />
  </svg>
}