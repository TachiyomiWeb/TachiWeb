import AppBarBanners from '../utils/AppBarBanners';
import * as Icons from '@mui/icons-material';
import {
	AppBar as Bar,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	styled,
	Toolbar,
	Typography,
} from '@mui/material';
import React, { ReactNode } from 'react';

const Header = styled(Bar)(({ theme }) => ({
	backgroundColor: theme['colorSurface'],
	color: theme['colorOnSurface'],
}));

export interface AppBarAction {
	title: string;
	icon?: ReactNode;
	onClick(): void;
	enabled?: boolean;
}

interface AppBarProps {
	title?: string;
	subtitle?: string;
	navigateUp?: () => unknown;
	navigateIcon?: Icons.SvgIconComponent;
    navigateDisabled?: boolean;
	actionModeCounter?: number;
	onCancelActionMode?: () => unknown;
	actions?: AppBarAction[];
}

interface AppBarState {
	showMenu: boolean;
	anchorEl: Element | null;
}
// <Typography variant='h6' component='div'>{ translation.string[navigation.title] }</Typography>

export default function AppBar({
	title,
	subtitle,
	navigateUp,
	navigateIcon = Icons.ArrowBack,
    navigateDisabled = true,
	actionModeCounter = 0,
	onCancelActionMode,
	actions = [],
}: AppBarProps) {
	const [state, setState] = React.useState<AppBarState>({
		showMenu: false,
		anchorEl: null,
	});

	const isActionMode = actionModeCounter > 0;
	const overflowActions = actions.filter(
		(action) => action.icon === undefined && action.enabled === undefined
	);

	return (
		<Header position='static'>
			<Toolbar
				sx={{ justifyContent: 'space-between', paddingLeft: '0px !important' }}
			>
				<Stack
					sx={{ alignItems: 'center' }}
					direction='row'
					width='100%'
					spacing={1}
				>
					<IconButton
						sx={{ width: 48, height: 48, marginLeft: '8px' }}
						onClick={isActionMode ? onCancelActionMode : navigateUp}
                        disabled={navigateDisabled}
					>
						{isActionMode ? <Icons.Close /> : React.createElement(navigateIcon)}
					</IconButton>
					<Stack>
						{title ? (
							<Typography variant='h6' component='div'>
								{title}
							</Typography>
						) : null}
						{subtitle ? (
							<Typography variant='subtitle1' component='div'>
								{subtitle}
							</Typography>
						) : null}
					</Stack>
				</Stack>
				{actions
					.filter(
						(action) =>
							action.icon !== undefined && action.enabled !== undefined
					)
					.map((action) => (
						<IconButton
							onClick={action.onClick}
							disabled={!action.enabled}
							children={action.icon}
						/>
					))}
				{overflowActions.length > 0 ? (
					<React.Fragment>
						<IconButton
							onClick={(event) =>
								setState((state) => ({
									...state,
									anchorEl: event.currentTarget,
									showMenu: !state.showMenu,
								}))
							}
						>
							<Icons.MoreVert />
						</IconButton>
						<Menu
							anchorEl={state.anchorEl}
							open={state.showMenu}
							onClose={() =>
								setState((state) => ({
									...state,
									anchorEl: null,
									showMenu: false,
								}))
							}
							onClick={() =>
								setState((state) => ({
									...state,
									anchorEl: null,
									showMenu: false,
								}))
							}
						>
							{overflowActions.map((action) => (
								<MenuItem onClick={action.onClick}>
									<Typography>{action.title}</Typography>
								</MenuItem>
							))}
						</Menu>
					</React.Fragment>
				) : null}
			</Toolbar>
			<AppBarBanners />
		</Header>
	);
}
