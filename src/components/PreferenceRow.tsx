import {
	ListItemButton,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { hexToRGB } from '../utils';

const Row = styled(ListItemButton)<{ subtitle?: string }>(({ subtitle }) => ({
	width: '100%',
	minHeight: subtitle !== undefined ? '72px' : '56px',
	alignItems: 'center',
}));

export default function PreferenceRow({
	title,
	subtitle,
	icon,
	action,
	...props
}: {
	[x: string]: any;
	title: string;
	subtitle?: string;
	icon?: string | JSX.Element;
	action?: JSX.Element;
}) {
	return (
		<Row subtitle={subtitle} {...props}>
			{icon !== undefined ? (
				<ListItemIcon
					sx={(theme) => ({
						color: theme['colorPrimary'],
						paddingRight: '24px',
					})}
				>
					{icon}
				</ListItemIcon>
			) : null}
			<ListItemText
				sx={(theme) => ({
					'& .MuiListItemText-secondary': {
						color: `rgba(${Object.entries(hexToRGB(theme['colorOnSurface']))
							.map(([_, color]) => color)
							.join(', ')}, .75)`,
					},
				})}
				primary={title}
				secondary={subtitle}
			/>
			{action !== undefined ? (
				<ListItemSecondaryAction>{action}</ListItemSecondaryAction>
			) : null}
		</Row>
	);
}
