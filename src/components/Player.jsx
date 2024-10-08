import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(isEditing => !isEditing)
    }
    const handleChangeName = (event) => {
        setPlayerName(event.target.value);
        if (isEditing) {
            onChangeName(symbol, event.target.value);
        }
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ?
                    <input type="text" required value={playerName} onChange={handleChangeName} /> :
                    <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}