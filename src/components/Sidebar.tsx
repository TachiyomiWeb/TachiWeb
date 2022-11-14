import { styled } from '@mui/system';
import { Drawer } from '@mui/material';
import { hexToRGB } from '../utils';

const Sidebar = styled(Drawer)(({ theme }) => ({
	width: 64,
	position: 'relative',
	'& .MuiDrawer-paper': {
		top: 'auto',
		position: 'absolute',
		height: 'auto',
		minHeight: '100%',
		backgroundColor: theme['colorBackground'],
		borderColor: theme['colorOutline'],
	},
	'& .MuiListItemIcon-root': {
		minWidth: 0,
	},
	'& .MuiListItemButton-root': {
		paddingTop: 2,
		paddingBottom: 2,
		borderRadius: 25,
		margin: '4px 0',
		width: '90%',
		justifyContent: 'center',
	},
	'& .MuiListItemButton-root:not(.Mui-selected):hover': {
		backgroundColor: `rgba(${Object.entries(
			hexToRGB(theme['colorPrimaryContainer'])
		)
			.map(([_, color]) => color)
			.join(', ')}, .08)`,
	},
	'& .MuiListItemButton-root.Mui-selected': {
		backgroundColor: theme['colorPrimaryContainer'],
	},
	'& .MuiListItemButton-root.Mui-selected path': {
		color: theme['colorOnPrimaryContainer'],
	},
	'& .MuiListItemButton-root .MuiTouchRipple-rippleVisible': {
		color: theme['colorOnPrimaryContainer'],
	},
}));

export default Sidebar;
