import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';
import React from 'react';

const rotateAnimation = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const rotateAnimationReverse = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const HistoryRoot = styled('svg')<{ isActive: boolean }>(({ isActive }) => ({
  width: 32,
  height: 32,
  '& g path': {
    animation: isActive ? `${rotateAnimation} .5s ease-in-out` : `${rotateAnimationReverse} .5s ease-in-out`,
    transformOrigin: '13px 12px'
  }
}));

export default function History({ isActive = false, ...props }: { [x: string]: any, isActive: boolean }) {
  return <HistoryRoot isActive={ isActive } { ...props } viewBox='0 0 24 24'>
    <path fill='currentColor' d='M 12 8 L 12 13 L 16.28 15.54 L 17 14.33 L 13.5 12.25 L 13.5 8 L 12 8 Z' />
    <g cx={ 13 } cy={ 12 }>
      <path fill='currentColor' d='M 13 3 C 8.03 3 4 7.03 4 12 L 1 12 L 4.89 15.89 L 4.96 16.03 L 9 12 L 6 12 C 6 8.13 9.13 5 13 5 C 16.87 5 20 8.13 20 12 C 20 15.87 16.87 19 13 19 C 11.07 19 9.32 18.21 8.06 16.94 L 6.64 18.36 C 8.27 19.99 10.51 21 13 21 C 17.97 21 22 16.97 22 12 C 22 7.03 17.97 3 13 3 Z M 13 3 Z' />
    </g>
  </HistoryRoot>
}