import { styled } from '@mui/material';
import React from 'react';

const variants = {
	filled:
		'M 23 12 L 20.56 9.22 L 20.9 5.54 L 17.29 4.72 L 15.4 1.54 L 12 3 L 8.6 1.54 L 6.71 4.72 L 3.1 5.53 L 3.44 9.21 L 1 12 L 3.44 14.78 L 3.1 18.47 L 6.71 19.29 L 8.6 22.47 L 12 21 L 15.4 22.46 L 17.29 19.28 L 20.9 18.46 L 20.56 14.78 L 23 12 Z M 12 13 L 11.5 13 L 11 13 L 11 12 L 11 11 L 11 10 L 11 9 L 11 8 L 11 7 L 12 7 L 13 7 L 13 7.857 L 13 8.714 L 13 9.571 L 13 10.429 L 13 11.286 L 13 12.143 L 13 13 L 13 13 L 13 13 L 12.5 13 L 12 13 M 11 15 L 13 15 L 13 16.058 L 13 17 L 13 17 L 11 17 L 11 15 M 12 10 L 12 10 L 12 10 L 12 10 L 12 10',
	outlined:
		'M 23 12 L 20.56 9.22 L 20.9 5.54 L 17.29 4.72 L 15.4 1.54 L 12 3 L 8.6 1.54 L 6.71 4.72 L 3.1 5.53 L 3.44 9.21 L 1 12 L 3.44 14.78 L 3.1 18.47 L 6.71 19.29 L 8.6 22.47 L 12 21 L 15.4 22.46 L 17.29 19.28 L 20.9 18.46 L 20.56 14.78 L 23 12 Z M 9.42 19.93 L 7.99 17.52 L 5.25 16.9 L 5.51 14.1 L 3.66 12 L 5.51 9.88 L 5.25 7.1 L 7.99 6.49 L 9.42 4.08 L 12 5.18 L 14.58 4.07 L 16.01 6.48 L 18.75 7.1 L 18.49 9.89 L 20.34 12 L 18.49 14.11 L 18.49 14.11 L 18.75 16.9 L 16.01 17.52 L 14.58 19.93 L 12 18.82 L 9.42 19.93 M 11 15 L 13 15 L 13 15.5 L 13 16 L 13 17 L 11 17 L 11 15 M 11 7 L 13 7 L 13 13 L 11 13 L 11 7',
};

const UpdatesRoot = styled('svg')<{ variant: 'outlined' | 'filled' }>(
	({ variant }) => ({
		width: 32,
		height: 32,
		'& > path:first-of-type': {
			transition: 'd .3s ease-in-out 0s',
			d: `path("${variants[variant ?? 'filled']}")`,
		},
	})
);

export default function Updates({
	isActive,
	...props
}: {
	[x: string]: any;
	isActive: boolean;
}) {
	return (
		<UpdatesRoot
			variant={isActive ? 'filled' : 'outlined'}
			{...props}
			viewBox='0 0 24 24'
		>
			<path fill='currentColor' />
		</UpdatesRoot>
	);
}
