import AppBar from '../components/AppBar';
import Loading from '../components/Loading';
import Sidebar from '../components/Sidebar';
import Browse from '../icons/Browse';
import History from '../icons/History';
import Library from '../icons/Library';
import More from '../icons/More';
import Updates from '../icons/Updates';
import { RootState } from '../store';
import { setItem, setTitle, turnBack } from '../store/states/navigation';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Box,
	Divider,
	List,
	ListItemButton,
	ListItemIcon,
	Stack,
	styled,
	Tooltip,
} from '@mui/material';
import MorePage from './More';

const StyledBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	width: '100%',
	alignItems: 'stretch',
	flexWrap: 'nowrap',
	flexDirection: 'row',
	backgroundColor: theme['colorBackground'],
	color: theme['colorOnBackground'],
	minHeight: '100%',
	flex: 1,
}));

/*const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme['colorSurface'],
  color: theme['colorOnSurface']
}))*/

const MainBox = styled(Box)(({ theme }) => ({
	width: '100%',
	backgroundColor: theme['colorBackground'],
	color: theme['colorOnBackground'],
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
}));

const Line = styled(Divider)(({ theme }) => ({
	borderColor: theme['colorOutline'],
}));

interface Children {
	name?: string;
	page?: JSX.Element;
}

interface Item {
	name: string;
	icon: Function;
	page: JSX.Element;
	header?: JSX.Element;
	children?: Children[];
}

export default function MainPage() {
	const translation = useSelector((state: RootState) => state.translation);
	const navigation = useSelector((state: RootState) => state.navigation);
	// const settings = useSelector((state: RootState) => state.settings);
	const dispatch = useDispatch();

	const [items] = React.useState<Item[]>([
		{
			name: 'label_library',
			icon: Library,
			page: <></>, // <LibraryPage />
		},
		{
			name: 'label_recent_updates',
			icon: Updates,
			page: <></>, // <UpdatesPage />
		},
		{
			name: 'label_recent_manga',
			icon: History,
			page: <div></div>,
		},
		{
			name: 'browse',
			icon: Browse,
			header: <div>Hello from header.</div>,
			page: <div></div>,
		},
		{
			name: 'label_more',
			icon: More,
			page: <MorePage />,
			children: [
				{},
				{},
				{
					name: 'label_backup',
					page: <></>, // <SettingsBackupPage />
				},
				{
					name: 'action_display_language_badge',
					page: <></>, // <SettingsLanguagePage />
				},
				{
					name: 'label_settings',
					page: <></>, // <SettingsPage />
				},
				{},
			],
		},
	]);

	const item = items[navigation.item];

	return (
		<MainBox>
			{translation.currentLanguage === 'unknown' && <Loading />}
			<AppBar
				title={translation.string[navigation.title ?? 'unknown']}
				subtitle={translation.string[navigation.title ?? 'unknown']}
				navigateDisabled={navigation.history.length <= 0}
				navigateUp={() => dispatch(turnBack(null))}
			/>
			<Line />
			<StyledBox>
				<Sidebar variant='permanent' open={true}>
					<List
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						{items.map((item, index) => (
							<Tooltip
								key={index}
								title={translation.string[item.name] ?? ''}
								placement='right'
								arrow
								enterDelay={500}
								leaveDelay={200}
							>
								<ListItemButton
									selected={navigation.item == index}
									onClick={() =>
										dispatch(setTitle(item.name)) && dispatch(setItem(index))
									}
								>
									<ListItemIcon>
										<item.icon isActive={navigation.item == index} />
									</ListItemIcon>
								</ListItemButton>
							</Tooltip>
						))}
					</List>
				</Sidebar>
				<Stack
					sx={{
						width: 'calc(100% - 64px)',
						direction: 'column',
						wrap: 'wrap',
						alignContent: 'flex-start',
						alignItems: 'stretch',
					}}
				>
					{navigation.children !== null
						? item.children !== undefined
							? item.children[navigation.children]?.page
							: item.page
						: item.page}
				</Stack>
			</StyledBox>
		</MainBox>
	);
}
