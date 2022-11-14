import { RootState } from '../store';
import { styled } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';

const DownloadedOnlyText = styled('div', {
	name: 'Tachi-DownloadOnlyText',
	slot: 'Root',
})(({ theme }) => ({
	backgroundColor: theme['colorTertiary'],
	color: theme['colorOnTertiary'],
	padding: 4,
	textAlign: 'center',
}));

const IncognitoText = styled('div', {
	name: 'Tachi-DownloadOnlyText',
	slot: 'Root',
})(({ theme }) => ({
	backgroundColor: theme['colorPrimary'],
	color: theme['colorOnPrimary'],
	padding: 4,
	textAlign: 'center',
}));

export default function AppBarBanners() {
	const settings = useSelector((state: RootState) => state.settings);
	const translation = useSelector((state: RootState) => state.translation);

	return (
		<React.Fragment>
			{settings.downloaded_only ? (
				<DownloadedOnlyText>
					{translation.string['label_downloaded_only']}
				</DownloadedOnlyText>
			) : null}
			{settings.incognito ? (
				<IncognitoText>
					{translation.string['pref_incognito_mode']}
				</IncognitoText>
			) : null}
		</React.Fragment>
	);
}
