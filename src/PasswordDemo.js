import React, { useState, useEffect } from 'react';

import {
    lowercaseLetters,
    uppercaseLetters,
    numbers,
    specialCharacters
} from './utils/letters';

const PasswordDemo = () => {
    const checkCharacters = [
        ...lowercaseLetters,
        ...uppercaseLetters,
        ...numbers,
        ...specialCharacters
    ];

    const [password, setPassword] = useState('');
    const [cracked, setCracked] = useState(false);

    useEffect(() => setCracked(false), [password]);

    const crackPassword = () => {
        const pwdLength = password.length;

        for (let firstLetter of checkCharacters) {
            let passwordGuess = firstLetter;
            if (passwordGuess === password) return setCracked(true);

            for (let secondLetter of checkCharacters) {
                passwordGuess = `${firstLetter}${secondLetter}`;
                if (passwordGuess === password) return setCracked(true);

                for (let thirdLetter of checkCharacters) {
                    passwordGuess = `${firstLetter}${secondLetter}${thirdLetter}`;
                    if (passwordGuess === password) return setCracked(true);
                }
            }
        }
    }
    return (
        <div>
            <h1>Simple Password Demo</h1>
            <p>Your current password is: {password}</p>

            <label htmlFor='pwd'>Password: </label>
            <input
                id='pwd'
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={crackPassword}>Crack Me!</button>
            <p>{cracked ? "Your password's been cracked!" : 'Good password...within reason'}</p>
        </div>
    );
}

export default PasswordDemo;