import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';
import React from 'react';

const variants = {
  filled: 'M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.141 5.886 21.38 10.878 21.938 C 11.247 21.979 11.621 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 C 12 2 12 2 12 2 M 12 10.9 C 11.695 10.9 11.42 11.023 11.221 11.221 C 11.023 11.42 10.9 11.695 10.9 12 C 10.9 12.61 11.39 13.1 12 13.1 C 12.61 13.1 13.1 12.61 13.1 12 C 13.1 11.39 12.61 10.9 12 10.9 L 12 10.9 M 14.19 14.19 L 6 18 L 6 18 L 9.81 9.81 L 18 6 L 14.19 14.19 L 14.19 14.19 M 12 12 L 12 12 C 12 12 12 12 12 12 C 12 12 12 12 12 12 C 12 12 12 12 12 12 C 12 12 12 12 12 12',
  outlined: 'M 9.99 9.99 C 9.408 11.242 8.827 12.493 8.245 13.745 C 7.663 14.997 7.082 16.248 6.5 17.5 C 6.5 17.5 6.5 17.5 6.5 17.5 C 9.003 16.337 11.507 15.173 14.01 14.01 C 15.173 11.507 16.337 9.003 17.5 6.5 C 14.997 7.663 12.493 8.827 9.99 9.99 M 12 10.9 C 11.39 10.9 10.9 11.39 10.9 12 C 10.9 12.305 11.023 12.58 11.221 12.779 C 11.42 12.977 11.695 13.1 12 13.1 C 12.61 13.1 13.1 12.61 13.1 12 C 13.1 11.39 12.61 10.9 12 10.9 L 12 10.9 M 12 12 L 12 12 L 12 12 L 12 12 L 12 12 L 12 12 L 12 12 M 12 12 L 12 12 C 12 12 12 12 12 12 C 12 12 12 12 12 12 C 12 12 12 12 12 12 C 12 12 12 12 12 12'
};

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const rotateAnimationReverse = keyframes`
  from {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const sizeAnimation = keyframes`
  0% {
    transform: scale(0);
  }

  66% {
    transform: scale(1);
  }
`;

const BrowseRoot = styled('svg')<{ isActive: boolean }>(({ isActive }) => ({
  width: 32,
  height: 32,
  animation: isActive ? `${rotateAnimation} .3s ease-in-out` : `${rotateAnimationReverse} .3s ease-in-out`,
  '& g[name="main_parent"]': {
    clipPath: isActive ? null : 'url(#dot_mask)'
  },
  '& g[name="group"]': {
    animation: `${sizeAnimation} .1s ease-in-out`
  },
  '& path[name="compass"]': {
    d: `path('${variants[isActive ? 'filled' : 'outlined']}')`,
    transition: 'd .3s ease-in-out 0s'
  },
  '& g[name="ring_parent"]': {
    transform: 'scale(0.833)',
    transformOrigin: '12.167px 12.167px'
  }
}));

export default function Browse({ isActive = false, ...props }: { [x: string]: any, isActive: boolean }) {
  return <BrowseRoot isActive={ isActive } { ...props } viewBox='0 0 24 24'>
    <g name='main_parent'>
      <g name='group'>
        <path name='dot' fill='currentColor' d='M 12 10.9 C 12.61 10.9 13.1 11.39 13.1 12 C 13.1 12.61 12.61 13.1 12 13.1 C 11.39 13.1 10.9 12.61 10.9 12 C 10.9 11.39 11.39 10.9 12 10.9 Z' />
      </g>
      <clipPath id='dot_mask'>
        <path d='M 0.188 0.188 L 0.188 24 L 23.938 24 L 23.938 0.188 L 0.188 0.188 Z M 12 10.9 C 12.61 10.9 13.1 11.39 13.1 12 C 13.1 12.61 12.61 13.1 12 13.1 C 11.39 13.1 10.9 12.61 10.9 12 C 10.9 11.39 11.39 10.9 12 10.9 Z' />
      </clipPath>
      <path name='compass' fill='currentColor' />
      <g name='ring_parent'>
        <path name='ring' strokeOpacity={ 0 } fill='currentColor' d='M 12 0 C 8.819 0 5.765 1.265 3.515 3.515 C 1.265 5.765 0 8.819 0 12 C 0 15.181 1.265 18.235 3.515 20.485 C 5.765 22.735 8.819 24 12 24 C 15.181 24 18.235 22.735 20.485 20.485 C 22.735 18.235 24 15.181 24 12 C 24 8.819 22.735 5.765 20.485 3.515 C 18.235 1.265 15.181 0 12 0 Z M 12 21.6 C 9.455 21.6 7.012 20.588 5.212 18.788 C 3.412 16.988 2.4 14.545 2.4 12 C 2.4 9.455 3.412 7.012 5.212 5.212 C 7.012 3.412 9.455 2.4 12 2.4 C 14.545 2.4 16.988 3.412 18.788 5.212 C 20.588 7.012 21.6 9.455 21.6 12 C 21.6 14.545 20.588 16.988 18.788 18.788 C 16.988 20.588 14.545 21.6 12 21.6 Z' />
      </g>
    </g>
  </BrowseRoot>
}