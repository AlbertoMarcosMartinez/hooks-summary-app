import React from 'react';
import HorizontalCardList from './components/HorizontalCardList';
import type { CardItem } from './types/CardItem';

const App: React.FC = () => {
    const cardItems: CardItem[] = [
        { order: 1, componentName: 'UseStateCard' },
        { order: 2, componentName: 'UseEffectCard' },
        { order: 3, componentName: 'UseContextCard' },
        { order: 4, componentName: 'UseReducerCard' },
        // Add more card items as needed
    ];

    return (
       <div style={{ margin: '20px' }}>
            <HorizontalCardList items={cardItems} />
        </div>
    );
};

export default App;