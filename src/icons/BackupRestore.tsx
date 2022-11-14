import React from 'react';

export default function BackupRestore({
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
				d='M14,12c0,-1.1 -0.9,-2 -2,-2s-2,0.9 -2,2 0.9,2 2,2 2,-0.9 2,-2zM12,3c-4.97,0 -9,4.03 -9,9L0,12l4,4 4,-4L5,12c0,-3.87 3.13,-7 7,-7s7,3.13 7,7 -3.13,7 -7,7c-1.51,0 -2.91,-0.49 -4.06,-1.3l-1.42,1.44C8.04,20.3 9.94,21 12,21c4.97,0 9,-4.03 9,-9s-4.03,-9 -9,-9z'
			/>
		</svg>
	);
}
