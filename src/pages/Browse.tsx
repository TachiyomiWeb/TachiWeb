import MangaItem from '../components/MangaItem';
import * as extensions from '../extensions';
import { RootState } from '../store';
import { selectExtension } from '../store/states/navigation';
import ExtensionObject from '../typings/ExtensionObject';
import SManga from '../typings/SManga';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import {
	Avatar,
	Box,
	Divider,
	LinearProgress,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
	ListSubheader,
	styled,
	Tab,
	Tabs,
} from '@mui/material';
import { hexToRGB } from '../utils';
// import { SettingsState } from '../store/states/settings';

const CenteredTabs = styled(Tabs)(({ theme }) => ({
	'& .MuiTab-root': {
		borderRadius: 4,
		color: theme['colorOutline'],
	},
	'& .MuiTab-root:not(.Mui-selected):hover': {
		backgroundColor: 'transparent',
	},
	'& .MuiTab-root.Mui-selected': {
		backgroundColor: 'transparent',
		color: theme['colorPrimary'],
	},
	'& .MuiTabs-indicator': {
		borderRadius: '4px 4px 0 0',
		backgroundColor: theme['colorPrimary'],
	},
}));

const Line = styled(Divider)(({}) => ({
	borderColor: 'rgba(255, 255, 255, 0.12)',
}));

interface LegendItem {
	content: string;
	button?: JSX.Element;
	type: 'legend';
}

interface ExtensionItem {
	id: string;
	icon: string;
	name: string;
	locale?: string;
	lastAvailable?: boolean;
	pinned?: boolean;
	type: 'extension';
}

interface TabItem {
	name: string;
	items: (LegendItem | ExtensionItem)[];
}

function AdaptiveMangaList({ extension }: { extension: string }) {
	const [locale, selectedExtension] = extension.split('.');
	const { popularManga }: ExtensionObject =
		extensions[locale][selectedExtension];

	if (popularManga === undefined) return <></>;

	const [results, setResults] = React.useState<SManga[]>([]);

	const fetchData = async () => {
		const mangas = await popularManga(Math.round(results.length / 30) + 1);
		setResults(results.concat(mangas));
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	return (
		<InfiniteScroll
			dataLength={results.length}
			next={fetchData}
			hasMore={true}
			loader={
				<LinearProgress
					sx={(theme) => ({
						width: 'calc(100% - 16px)',
						margin: '8px 0 8px 8px',
						borderRadius: '25px',
						height: '8px',
						backgroundColor: `rgba(${Object.entries(
							hexToRGB(theme['colorPrimaryContainer'])
						)
							.map(([_, color]) => color)
							.join(', ')}, .6)`,
						'& .MuiLinearProgress-bar': {
							backgroundColor: theme['colorPrimary'],
						},
					})}
				/>
			}
			endMessage={
				<p>
					<b>That's end!</b>
				</p>
			}
		>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
					width: '100%',
					gap: 1,
					padding: 1,
				}}
			>
				{results.map((manga: SManga, index) => (
					<MangaItem
						key={manga.url ?? index}
						title={manga.title ?? ''}
						image={manga.thumbnail_url ?? ''}
					/>
				))}
			</Box>
		</InfiniteScroll>
	);
}

export default function MorePage() {
	const [value, setValue] = React.useState(0);
	const [tabs, _] = React.useState<TabItem[]>([
		{
			name: 'label_sources',
			items: [
				{
					content: 'Источники (Язык: Русский)',
					type: 'legend',
				},
				{
					id: 'ru.remanga',
					name: 'Remanga',
					icon: 'https://tachi.cloud.efreakbnc.net/langs/ru/fdroid/repo/icons-640/eu.kanade.tachiyomi.extension.ru.remanga.10.png',
					locale: 'Русский',
					type: 'extension',
				},
			],
		},
		{
			name: 'label_extensions',
			items: [],
		},
		{
			name: 'label_migration',
			items: [],
		},
	]);

	const translation = useSelector((state: RootState) => state.translation);
	const navigation = useSelector((state: RootState) => state.navigation);
	const dispatch = useDispatch();

	return (
		<>
			{navigation.selectedExtension === null ? (
				<>
					<CenteredTabs
						value={value}
						onChange={(_, val) => setValue(val)}
						centered
					>
						{tabs.map((tab) => (
							<Tab key={tab.name} label={translation.string[tab.name]} />
						))}
					</CenteredTabs>
					<Line />
					<List
						sx={{
							'& .MuiListItemButton-root': {
								pb: 0.25,
								pt: 0.25,
								pl: 1,
								pr: 1,
							},
							'& .MuiListItemIcon-root': {
								minWidth: 48,
							},
							'& .MuiListSubheader-root': {
								lineHeight: '36px',
								background: 'transparent',
							},
						}}
					>
						{tabs[value].items.map((item, index) => {
							if (item.type === 'extension')
								return (
									<ListItemButton
										key={item.id}
										onClick={() => dispatch(selectExtension(item.id))}
									>
										<ListItemIcon>
											<Avatar
												src={item.icon}
												alt={item.name}
												variant='rounded'
											/>
										</ListItemIcon>
										<ListItemText primary={item.name} secondary={item.locale} />
										<ListItemSecondaryAction></ListItemSecondaryAction>
									</ListItemButton>
								);
							else
								return (
									<ListSubheader key={index}>{item?.content}</ListSubheader>
								);
						})}
					</List>
				</>
			) : (
				<AdaptiveMangaList extension={navigation.selectedExtension} />
			)}
		</>
	);
}
