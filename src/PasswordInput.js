import React from 'react';
import './PasswordInput.css';

const PasswordInput = ({ password, setPassword, crackPassword }) => {
    return (
        <div>

            <div className="PasswordInput-input-flex">
                <label htmlFor="pwd" className="PasswordInput-label">Password: </label>
                <input
                    id="pwd"
                    type="text"
                    maxLength="6"
                    value={ password }
                    onChange={ e => setPassword(e.target.value) }
                    className="PasswordInput-input"
                />

                <button onClick={ crackPassword } className="PasswordInput-button">Crack Me!</button>
            </div>
        </div>
    )
}

export default PasswordInput;