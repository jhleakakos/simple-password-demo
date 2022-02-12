import React, { useState, useEffect } from 'react';

import {
    lowercaseLetters,
    uppercaseLetters,
    numbers,
    specialCharacters
} from './utils/characters';

const PasswordDemo = () => {
    const checkCharacters = [
        ...lowercaseLetters,
        // ...uppercaseLetters,
        // ...numbers,
        // ...specialCharacters
    ];

    const [password, setPassword] = useState('');
    const [cracked, setCracked] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => setCracked(false), [password]);

    const crackPassword = () => {
        let checkCount = 0;

        for (let letter1 of checkCharacters) {
            checkCount += 1;
            let passwordGuess1 = letter1;
            if (passwordGuess1 === password) {
                setCount(checkCount);
                setCracked(true);
                return
            }

            for (let letter2 of checkCharacters) {
                checkCount += 1;
                let passwordGuess2 = `${passwordGuess1}${letter2}`;
                if (passwordGuess2 === password) {
                    setCount(checkCount);
                    setCracked(true);
                    return
                }

                for (let letter3 of checkCharacters) {
                    checkCount += 1;
                    let passwordGuess3 = `${passwordGuess2}${letter3}`;
                    if (passwordGuess3 === password) {
                        setCount(checkCount);
                        setCracked(true);
                        return
                    }

                    for (let letter4 of checkCharacters) {
                        checkCount += 1;
                        let passwordGuess4 = `${passwordGuess3}${letter4}`;
                        if (passwordGuess4 === password) {
                            setCount(checkCount);
                            setCracked(true);
                            return
                        }

                        for (let letter5 of checkCharacters) {
                            checkCount += 1;
                            let passwordGuess5 = `${passwordGuess4}${letter5}`;
                            if (passwordGuess5 === password) {
                                setCount(checkCount);
                                setCracked(true);
                                return
                            }

                            for (let letter6 of checkCharacters) {
                                checkCount += 1;
                                let passwordGuess6 = `${passwordGuess5}${letter6}`;
                                if (passwordGuess6 === password) {
                                    setCount(checkCount);
                                    setCracked(true);
                                    return
                                }
                            }
                        }
                    }
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
                maxLength='6'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={crackPassword}>Crack Me!</button>
            <p>{cracked ? "Your password's been cracked!" : 'Good password...within reason'}</p>
            {cracked ? <p>Number of checks to get to your password: {count}</p> : ''}
        </div>
    );
}

export default PasswordDemo;