import React from 'react';
import { Container } from '@mui/material';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

interface DefautLeyoutProps {
  pages: React.ReactNode;
}

const DefautLeyout: React.FC<DefautLeyoutProps> = ({ pages }) => {
  return (
    <>
      <ResponsiveAppBar />
      <Container
        maxWidth="lg"
        fixed
        sx={{
          paddingBottom: '20px',
          marginTop: '50px'
        }}
      >
        {pages}
      </Container>
    </>
  );
};

export default DefautLeyout;
