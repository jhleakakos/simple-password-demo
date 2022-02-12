import React, { useState } from 'react';

const PasswordDemo = () => {
    const [password, setPassword] = useState('');
    const crackPassword = () => {
        const pwdLength = password.length;
        console.log(pwdLength);
        for (let i = 0; i < 26; i++) {
            let firstLetter = String.fromCharCode(97 + i);
            for (let j = 0; j < 26; j++) {
                let secondLetter = String.fromCharCode(97 + j);
                for (let k = 0; k < 26; k++) {
                    let thirdLetter = String.fromCharCode(97 + k);
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