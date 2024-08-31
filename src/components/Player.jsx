import { useState } from 'react';

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(isEditing => !isEditing)
    }
    const handleChangeName = (event) => {
        console.log(event.target.value)
        name = event.target.value
    }
    return (
        <li>
            <span className="player">
                {isEditing ?
                    <input type="text" required value={name} onChange={handleChangeName} /> :
                    <span className="player-name">{name}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}