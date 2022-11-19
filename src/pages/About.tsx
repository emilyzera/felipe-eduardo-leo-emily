import { Grid } from '@mui/material';
import React from 'react';
import Form from '../components/Form/Form';
import Singup from '../pages/Singup';

const About: React.FC = () => {
  return (
    <>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Form />
          </Grid>
        </Grid>
        <Singup />
      </div>
    </>
  );
};

export default About;
