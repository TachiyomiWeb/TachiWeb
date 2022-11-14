import React from 'react';

export default function Translate({
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
				d='M12.87,15.07l-2.54,-2.51 0.03,-0.03c1.74,-1.94 2.98,-4.17 3.71,-6.53L17,6L17,4h-7L10,2L8,2v2L1,4v1.99h11.17C11.5,7.92 10.44,9.75 9,11.35 8.07,10.32 7.3,9.19 6.69,8h-2c0.73,1.63 1.73,3.17 2.98,4.56l-5.09,5.02L4,19l5,-5 3.11,3.11 0.76,-2.04zM18.5,10h-2L12,22h2l1.12,-3h4.75L21,22h2l-4.5,-12zM15.88,17l1.62,-4.33L19.12,17h-3.24z'
			/>
		</svg>
	);
}
