import PreferenceRow from '../components/PreferenceRow';
import SwitchPreference from '../components/SwitchPreference';
import BackupRestore from '../icons/BackupRestore';
import CloudOff from '../icons/CloudOff';
import GetApp from '../icons/GetApp';
import Glasses from '../icons/Glasses';
import Help from '../icons/Help';
import Info from '../icons/Info';
import Label from '../icons/Label';
import Settings from '../icons/Settings';
import Translate from '../icons/Translate';
import { RootState } from '../store';
import { changeSettings, SettingsState } from '../store/states/settings';
import { Divider, List, styled } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

type ConfigurableColumnsKeys<T extends object> = {
	[K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];

interface SwitchItem {
	title: string;
	subtitle: string;
	icon: JSX.Element;
	key: ConfigurableColumnsKeys<SettingsState>;
	type: 'switch';
}

interface DividerItem {
	type: 'divider';
}

interface PageItem {
	title: string;
	icon: JSX.Element;
	type: 'page';
}

interface LinkItem {
	title: string;
	icon: JSX.Element;
	url: string;
	type: 'link';
}

const Line = styled(Divider)(({ theme }) => ({
	borderColor: theme['colorOutline'],
}));

export default function MorePage() {
	const [items, _] = React.useState<
		(SwitchItem | DividerItem | LinkItem | PageItem)[]
	>([
		{
			title: 'label_downloaded_only',
			subtitle: 'downloaded_only_summary',
			icon: <CloudOff width='28px' height='28px' />,
			key: 'downloaded_only',
			type: 'switch',
		},
		{
			title: 'pref_incognito_mode',
			subtitle: 'pref_incognito_mode_summary',
			icon: <Glasses width='28px' height='28px' />,
			key: 'incognito',
			type: 'switch',
		},
		{
			type: 'divider',
		},
		{
			title: 'label_download_queue',
			icon: <GetApp width='28px' height='28px' />,
			type: 'page',
		},
		{
			title: 'categories',
			icon: <Label width='28px' height='28px' />,
			type: 'page',
		},
		{
			title: 'label_backup',
			icon: <BackupRestore width='28px' height='28px' />,
			type: 'page',
		},
		{
			type: 'divider',
		},
		{
			title: 'action_display_language_badge',
			icon: <Translate width='28px' height='28px' />,
			type: 'page',
		},
		{
			type: 'divider',
		},
		{
			title: 'label_settings',
			icon: <Settings width='28px' height='28px' />,
			type: 'page',
		},
		{
			title: 'pref_category_about',
			icon: <Info width='28px' height='28px' />,
			type: 'page',
		},
		{
			title: 'label_help',
			icon: <Help width='28px' height='28px' />,
			url: 'https://tachiyomi.org/help/',
			type: 'link',
		},
	]);

	const translation = useSelector((state: RootState) => state.translation);
	// const navigation = useSelector((state: RootState) => state.navigation);
	const settings = useSelector((state: RootState) => state.settings);
	const dispatch = useDispatch();

	return (
		<List>
			{items.map((item, index) => {
				if (item.type === 'divider')
					return <Line key={index} sx={{ width: '100%' }} />;
				else if (item.type === 'switch')
					return (
						<SwitchPreference
							key={index}
							onChange={(checked) =>
								dispatch(changeSettings({ key: item.key, value: checked }))
							}
							checked={settings[item.key]}
							title={translation.string[item.title]}
							subtitle={translation.string[item.subtitle]}
							icon={item.icon}
						/>
					);
				else if (item.type === 'page')
					return (
						<PreferenceRow
							key={index}
							title={translation.string[item.title]}
							icon={item.icon}
							disabled
						/>
					);
				else if (item.type === 'link')
					return (
						<PreferenceRow
							key={index}
							onClick={() => window.open(item.url)}
							title={translation.string[item.title]}
							icon={item.icon}
						/>
					);
				else return null;
			})}
		</List>
	);
}
