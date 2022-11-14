import React from 'react';

export default function Label({
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
				d='M17.63,5.84C17.27,5.33 16.67,5 16,5L5,5.01C3.9,5.01 3,5.9 3,7v10c0,1.1 0.9,1.99 2,1.99L16,19c0.67,0 1.27,-0.33 1.63,-0.84L22,12l-4.37,-6.16zM16,17H5V7h11l3.55,5L16,17z'
			/>
		</svg>
	);
}
