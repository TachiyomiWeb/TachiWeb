import React from 'react';

export default function Tachi({ width = '42px', height = '24px', ...props }: { [x: string]: any, width: string, height: string }) {
  return <svg width={ width } height={ height } { ...props } viewBox='0 0 256 256'>
    <path fill='currentColor' d='M102.6,19.2c0.3,5.7 0.6,13.1 0.8,16.6l0.4,6.3 -42.7,-0.3c-23.4,-0.2 -43.4,-0.7 -44.3,-1.2 -1.7,-0.8 -1.8,0.6 -1.8,20.4v21.2l2.3,-0.6C23.9,79.7 50.6,79 126,79s102.1,0.7 108.8,2.6l2.2,0.6V61c0,-19.8 -0.1,-21.2 -1.7,-20.4 -1,0.5 -21,1 -44.4,1.2l-42.7,0.3 0.4,-6.3c0.2,-3.5 0.5,-10.9 0.8,-16.6l0.4,-10.2h-47.6l0.4,10.2zM58.8,93.2c-10.4,3.9 -18.8,7.7 -18.8,8.3 0,0.7 1.4,4.3 3.1,8.1 8,17.7 20.6,61.5 24.1,83.6 0.6,4.3 1.6,7.8 2.2,7.8 0.6,0 10.4,-3.2 21.9,-7.1 14.9,-5.2 20.7,-7.6 20.7,-8.7 0,-3.2 -17.8,-61 -26.2,-85C82,89.6 80.4,86 79.1,86.1c-0.9,0 -10,3.2 -20.3,7.1z' />
    <path fill='currentColor' d='M167.2,93.7c-3.3,21 -15.6,61.6 -28.8,95l-6.9,17.3H6v40h243v-40h-37.1c-29.3,0 -37,-0.3 -36.6,-1.3 0.3,-0.6 2.7,-5.9 5.3,-11.7 2.5,-5.8 7.5,-18.3 11,-27.9 6.7,-18.4 21.4,-64.3 21.4,-67 0,-1.3 -4.6,-2.8 -21.2,-6.9 -11.7,-2.9 -21.8,-5.2 -22.4,-5.2 -0.6,0 -1.6,3.5 -2.2,7.7z' />
  </svg>
}