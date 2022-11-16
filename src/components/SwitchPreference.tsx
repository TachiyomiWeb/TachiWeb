import { Switch as OriginalSwitch } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import PreferenceRow from './PreferenceRow';

const Switch = styled(OriginalSwitch)(({ theme }) => ({
	padding: '6px',
	'& .MuiButtonBase-root': {
		padding: '13px',
		backgroundColor: 'transparent !important',
		'& + .MuiSwitch-track': {
            border: `2px solid ${theme['colorOutline']}`,
            backgroundColor: theme['colorSurfaceVariant'],
			borderRadius: '12px',
            opacity: 1
		},
        '& .MuiTouchRipple-root': {
            visibility: 'hidden'
        },
        '& .MuiSwitch-thumb': {
            color: theme['colorOutline'],
            width: '13px',
            height: '13px',
            boxShadow: 'none'
        }
	},
	'& .MuiButtonBase-root.Mui-checked': {
		padding: '9px',
		'& + .MuiSwitch-track': {
            border: `2px solid ${theme['colorPrimary']}`,
			backgroundColor: theme['colorPrimary'],
		},
		'& .MuiSwitch-thumb': {
			color: theme['colorOnPrimary'],
            width: '20px',
            height: '20px'
		},
	},
}));

export default function SwitchPreference({
	title,
	subtitle,
	icon,
	checked,
	onChange,
	...props
}: {
	[x: string]: any;
	title: string;
	subtitle?: string;
	icon?: string | JSX.Element;
	checked: boolean;
	onChange: (checked: boolean) => void;
}) {
	const [isChecked, setIsChecked] = React.useState(checked);
	return (
		<PreferenceRow
			{...props}
			title={title}
			subtitle={subtitle}
			icon={icon}
			onClick={() => {
				setIsChecked(!isChecked);
				onChange(!isChecked);
			}}
			action={<Switch checked={isChecked} />}
		/>
	);
}
