import React, {useState} from 'react';
import Board from './component/Board'

type Props = {
    board: string
}

const App : React.FC<Props>= ({board}) => {
    return (
        <div>
            <div>{board}</div>

        </div>
    );
};

export default App;