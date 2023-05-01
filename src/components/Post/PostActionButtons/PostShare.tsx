import React, { FC } from 'react';
import { Box, ToggleButton, Typography } from '@mui/material';
import ShareSVG from '@/assets/Share.svg';

interface IPostShare {
  count: number;
  selected?: boolean;
  onChange: () => void;
};

const PostShare: FC<IPostShare> = ({ count, selected, onChange }) => {
  const notSelectedColor = '#5B7083';
  const selectedColor = '#1DA1F2';
  const toggleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    minWidth: '40px',
    p: 0,
    background: 'none!important',
    border: 'none',
  };
  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={onChange}
      sx={toggleStyles}
    >
      <Box sx={{ display: 'flex' }}>
        <ShareSVG
          style={{
            stroke: selected ? selectedColor : notSelectedColor,
            fill: selected && selectedColor,
          }}
        />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{ color: notSelectedColor, lineHeight: 1.1 }}
      >
        {count}
      </Typography>
    </ToggleButton>
  );
};

export default PostShare;
