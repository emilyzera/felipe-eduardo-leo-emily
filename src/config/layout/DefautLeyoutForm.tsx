import React from 'react';
import { Container } from '@mui/material';

interface DefautLeyoutProps {
  pages: React.ReactNode;
}

const DefautLeyoutForm: React.FC<DefautLeyoutProps> = ({ pages }) => {
  return (
    <>
      <Container
        maxWidth="lg"
        fixed
        sx={{
          marginTop: '150px',
          textAlign: 'center'
        }}
      >
        {pages}
      </Container>
    </>
  );
};

export default DefautLeyoutForm;
