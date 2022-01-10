import React, {useState} from 'react'

type Props = {
    board: string
    setBoard: React.Dispatch<React.SetStateAction<string>>
}

const Board : React.FC<Props> = ({board, setBoard}) => {
    return (
        <div>
            {board}
        </div>
    )
}

export default Board