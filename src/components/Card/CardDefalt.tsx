import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardDefaltProps {
  title?: string;
  subtitle?: string;
  content: string;
  subcontent?: string;
  footer?: string;
  backg: string;
}

const CardDefalt: React.FC<CardDefaltProps> = ({ title, subtitle, content, footer, subcontent, backg }) => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: { backg }, alignItems: 'center' }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {subtitle}
        </Typography>
        <Typography sx={{ mb: 1.9 }} color="text.secondary">
          {content}
        </Typography>
        <Typography variant="body2">{subcontent}</Typography>
        <Typography variant="h4" fontSize="15px">
          {footer}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDefalt;
