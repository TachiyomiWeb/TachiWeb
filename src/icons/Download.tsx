import DownloadModel from '../models/DownloadModel';
import { CircularProgress } from '@mui/material';
import { withTheme } from '@mui/styles';
import { styled, useTheme } from '@mui/system';
import React from 'react';

const DownloadRoot = styled('div')({
  width: 42,
  height: 42,
  padding: 8,
  position: 'relative',
  marginLeft: 'auto'
});

const IconView = styled('div')({
  height: '100%',
  width: '100%'
});

function Download({ status = DownloadModel.State.NOT_DOWNLOADED, ...props }: { [x: string]: any, status: DownloadModel.State }) {
  const theme = useTheme<{ colors: Record<string, string> }>();

  return <DownloadRoot { ...props }>
    { status == DownloadModel.State.ERROR && <svg viewBox='0 0 24 24' width='100%' height='100%'>
      <path fill={ theme.colors.error } d='M11,15h2v2h-2zM11,7h2v6h-2zM11.99,2C6.47,2 2,6.48 2,12s4.47,10 9.99,10C17.52,22 22,17.52 22,12S17.52,2 11.99,2zM12,20c-4.42,0 -8,-3.58 -8,-8s3.58,-8 8,-8 8,3.58 8,8 -3.58,8 -8,8z' />
    </svg> }
    { status == DownloadModel.State.DOWNLOADED && <svg viewBox='0 0 24 24' width='100%' height='100%'>
      <path fill='#fff' d='M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2zM10,17l-5,-5 1.41,-1.41L10,14.17l7.59,-7.59L19,8l-9,9z' />
    </svg> }
    { (status == DownloadModel.State.DOWNLOADING || status == DownloadModel.State.QUEUE) && <CircularProgress color='inherit' sx={ {
      padding: '2px',
      height: '42px',
      width: '42px',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      '& circle': {
        strokeWidth: 2
      }
    } } /> }
    { (status == DownloadModel.State.NOT_DOWNLOADED || status == DownloadModel.State.DOWNLOADING || status == DownloadModel.State.QUEUE) && <IconView>
      <svg viewBox='0 0 24 24' width='100%' height='100%'>
        <path fill='currentColor' d='M20,12l-1.41,-1.41L13,16.17V4h-2v12.17l-5.58,-5.59L4,12l8,8 8,-8z' />
      </svg>
    </IconView> }
  </DownloadRoot>;
};

export default withTheme<{ colors: Record<string, string> }, typeof Download>(Download);