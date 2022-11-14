import React from 'react';

export default function Help({
	width = '24px',
	height = '24px',
	...props
}: {
	[x: string]: any;
	width: string;
	height: string;
}) {
	return (
		<svg width={width} height={height} {...props} viewBox='0 0 24 24'>
			<path
				fill='currentColor'
				d='M11,18h2v-2h-2v2zM12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2zM12,20c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8 8,3.59 8,8 -3.59,8 -8,8zM12,6c-2.21,0 -4,1.79 -4,4h2c0,-1.1 0.9,-2 2,-2s2,0.9 2,2c0,2 -3,1.75 -3,5h2c0,-2.25 3,-2.5 3,-5 0,-2.21 -1.79,-4 -4,-4z'
			/>
		</svg>
	);
}
