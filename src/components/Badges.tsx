import * as React from 'react';
import { styled } from '@mui/system';

const BadgeRoot = styled('span', {
	name: 'TachiBadge',
	slot: 'Root',
})<{ background: string }>(({ theme, color, background }) => ({
	padding: '3px',
	color: theme[color ?? ''],
	background: theme[background],
	fontSize: (theme['typography'] as Record<string, Function>)['pxToRem'](12),
}));

const BadgeGroupRoot = styled('div', {
	name: 'TachiBadgeGroup',
	slot: 'Root',
})(({}) => ({
	display: 'flex',
	width: 'max-content',
	position: 'absolute',
	left: '4px',
	top: '4px',
	'& .TachiBadge-Root:first-of-type': {
		borderBottomLeftRadius: 4,
		borderTopLeftRadius: 4,
	},
	'& .TachiBadge-Root:last-of-type': {
		borderBottomRightRadius: 4,
		borderTopRightRadius: 4,
	},
}));

export default function Badges({
	downloaded,
	unreaded,
	...props
}: {
	downloaded: number;
	unreaded: number;
}) {
	return (
		<BadgeGroupRoot {...props}>
			{downloaded > 0 && (
				<BadgeRoot background='colorTertiary' color='colorOnTertiary'>
					{downloaded}
				</BadgeRoot>
			)}
			{unreaded > 0 && (
				<BadgeRoot background='colorSecondary' color='colorOnSecondary'>
					{unreaded}
				</BadgeRoot>
			)}
		</BadgeGroupRoot>
	);
}
