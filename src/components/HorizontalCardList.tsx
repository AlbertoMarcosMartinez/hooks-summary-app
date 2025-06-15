import React, { Suspense } from 'react';
import { Card, Box, CircularProgress } from '@mui/material';
import type { CardItem } from '../types/CardItem';
import { getComponent } from '../utils/componentsRegistry';

const HorizontalCardList: React.FC<{ items: CardItem[] }> = ({ items }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, overflowX: 'auto', border: '1px solid #ccc', padding: 2 , minHeight: 450}}>
      {items.map((item, index) => (
        <Card key={index} sx={{ minWidth: 300 }}>
          <Suspense fallback={<CircularProgress />}>
            {React.createElement(getComponent(item.componentName))}
          </Suspense>
        </Card>
      ))}
    </Box>
  );
};

export default HorizontalCardList;