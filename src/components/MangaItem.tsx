import Badges from './Badges';
import { styled } from '@mui/system';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

const ItemRoot = styled('div', {
	name: 'TachiItem',
	slot: 'Root',
})(({ theme }) => ({
	minWidth: '150px',
	height: '200px',
	borderRadius: 4,
	position: 'relative',
	userSelect: 'none',
	backgroundColor: theme['surfaceVariant'],
}));

const ItemImage = styled('img', {
	name: 'TachiItem',
	slot: 'Image',
})(({}) => ({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: 4,
	pointerEvents: 'none',
}));

const ItemName = styled('span', {
	name: 'TachiItem',
	slot: 'Name',
})(({ theme }) => ({
	fontSize: (theme['typography'] as Record<string, Function>)['pxToRem'](12),
	padding: 8,
	position: 'absolute',
	bottom: '0',
	left: '0',
	right: '0',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'break-spaces',
	lineClamp: 2,
	height: '50%',
	display: 'flex',
	alignItems: 'flex-end',
	background: 'linear-gradient(transparent 0%, black 100%)',
	borderRadius: 4,
}));
export default function MangaItem({
	title,
	image,
	downloaded = 0,
	unreaded = 0,
}: {
	title: string;
	image: string;
	downloaded?: number;
	unreaded?: number;
}) {
	const [showImage, setImage] = React.useState(true);

	return (
		<ItemRoot>
			{image && showImage ? (
				<ItemImage onError={() => setImage(false)} src={image} />
			) : null}
			<Badges downloaded={downloaded} unreaded={unreaded} />
			<ItemName>
				<LinesEllipsis
					maxLine='2'
					ellipsis='...'
					trimRight
					basedOn='letters'
					text={title}
				/>
			</ItemName>
		</ItemRoot>
	);
}
