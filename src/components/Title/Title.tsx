import { Typography } from '@mui/material';
import React from 'react';

interface TitleProps {
  title: string;
  size: string;
}

const TitleDefalt: React.FC<TitleProps> = ({ title, size }) => {
  return (
    <>
      <Typography variant="h3" fontSize={size}>
        {title}
      </Typography>
    </>
  );
};

export default TitleDefalt;
