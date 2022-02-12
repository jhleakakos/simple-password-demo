import React, { useState } from 'react';

import {
    lowercaseLetters,
    uppercaseLetters,
    numbers,
    specialCharacters
} from './utils/letters';

const PasswordDemo = () => {
    const [password, setPassword] = useState('');
    const checkCharacters = [
        ...lowercaseLetters,
        ...uppercaseLetters,
        ...numbers,
        ...specialCharacters
    ];
    const crackPassword = () => {
        const pwdLength = password.length;

        for (let firstLetter of checkCharacters) {
            for (let secondLetter of checkCharacters) {
                for (let thirdLetter of checkCharacters) {
                    let passwordGuess = `${firstLetter}${secondLetter}${thirdLetter}`;
                    if (passwordGuess === password) {
                        return console.log(`Your password is: ${passwordGuess}`);
                    }
                }
            }
        }

        console.log("Couldn't Guess Your Password");
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
        </div>
    );
}

export default PasswordDemo;