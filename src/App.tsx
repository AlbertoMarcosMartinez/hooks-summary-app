import React from 'react';
import HorizontalCardList from './components/HorizontalCardList';
import type { CardItem } from './types/CardItem';

const App: React.FC = () => {
    const cardItems: CardItem[] = [
        { order: 1, componentName: 'UseStateCard' },
        { order: 2, componentName: 'UseEffectCard' },
        { order: 3, componentName: 'UseContextCard' },
        { order: 4, componentName: 'UseReducerCard' },
        { order: 5, componentName: 'UseRefCard' },
        { order: 6, componentName: 'UseImperativeCard' },
        { order: 7, componentName: 'UseLayoutEffectCard' },
        { order: 8, componentName: 'UseInsertionEffectCard' },
        // Add more card items as needed
    ];

    return (
       <div>
            <HorizontalCardList items={cardItems} />
        </div>
    );
};

export default App;