import React from 'react';
import HorizontalCardList from './components/HorizontalCardList';
import type { CardItem } from './types/CardItem';

const App: React.FC = () => {
    const cardItems: CardItem[] = [
        { order: 2, componentName: 'UseStateCard' },
        { order: 1, componentName: 'UseEffectCard' }
    ];

    return (
       <div style={{ margin: '20px' }}>
            <HorizontalCardList items={cardItems} />
        </div>
    );
};

export default App;