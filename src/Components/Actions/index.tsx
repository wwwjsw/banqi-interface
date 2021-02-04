import React from 'react'

import ActionsCard from '../ActionsCard'

import { ActionsContainer, ActionsScrollView} from  './styles'

export default function Balance() {
    const data = [9, 77, 4, 5, 6];

    return (
        <ActionsContainer>
            <ActionsScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginHorizontal: 20,
                }}
                horizontal
                contentOffset={{x: 20, y: 0}}
            >
                {data.map((item) => <ActionsCard key={item} isNotLast={data.reverse()[0] !== item}/>)}
            </ActionsScrollView>
        </ActionsContainer>
    );
}
