import React, { useState, useEffect } from 'react';
import PasswordInput from './PasswordInput';

import {
    lowercaseLetters,
    uppercaseLetters,
    numbers,
    specialCharacters
} from './utils/characters';

import dictionaryWordList from './utils/words';

const PasswordDemo = () => {
    const checkCharacters = [
        ...lowercaseLetters,
        // ...uppercaseLetters,
        // ...numbers,
        // ...specialCharacters
    ];

    const [passwordCrackMethod, setPasswordCrackMethod] = useState('brute');
    const [password, setPassword] = useState('');
    const [cracked, setCracked] = useState(null);
    const [cracking, setCracking] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCracked(false);
        setCracking(null)
    }, [password]);

    useEffect(() => {
        if (cracking && passwordCrackMethod === 'brute') crackPasswordBruteForce();
        if (cracking && passwordCrackMethod === 'dict') crackPasswordDictionary();
    }, [cracking]);

    useEffect(() => {
        setPassword('');
    }, [passwordCrackMethod]);

    const crackPassword = () => {
        setCracked(false);
        setCracking(true);
    }

    const crackPasswordBruteForce = () => {
        let checkCount = 0;

        for (let letter1 of checkCharacters) {
            checkCount += 1;
            let passwordGuess1 = letter1;
            if (passwordGuess1 === password) {
                setCount(checkCount);
                setCracked(true);
                setCracking(false);
                return
            }

            for (let letter2 of checkCharacters) {
                checkCount += 1;
                let passwordGuess2 = `${ passwordGuess1 }${ letter2 }`;
                if (passwordGuess2 === password) {
                    setCount(checkCount);
                    setCracked(true);
                    setCracking(false);
                    return
                }

                for (let letter3 of checkCharacters) {
                    checkCount += 1;
                    let passwordGuess3 = `${ passwordGuess2 }${ letter3 }`;
                    if (passwordGuess3 === password) {
                        setCount(checkCount);
                        setCracked(true);
                        setCracking(false);
                        return
                    }

                    for (let letter4 of checkCharacters) {
                        checkCount += 1;
                        let passwordGuess4 = `${ passwordGuess3 }${ letter4 }`;
                        if (passwordGuess4 === password) {
                            setCount(checkCount);
                            setCracked(true);
                            setCracking(false);
                            return
                        }

                        for (let letter5 of checkCharacters) {
                            checkCount += 1;
                            let passwordGuess5 = `${ passwordGuess4 }${ letter5 }`;
                            if (passwordGuess5 === password) {
                                setCount(checkCount);
                                setCracked(true);
                                setCracking(false);
                                return
                            }

                            for (let letter6 of checkCharacters) {
                                checkCount += 1;
                                let passwordGuess6 = `${ passwordGuess5 }${ letter6 }`;
                                if (passwordGuess6 === password) {
                                    setCount(checkCount);
                                    setCracked(true);
                                    setCracking(false);
                                    return
                                }
                            }
                        }
                    }
                }
            }
        }
        setCracking(false);
    }

    const crackPasswordDictionary = () => {
        let checkCount = 0;

        for (let word of dictionaryWordList) {
            checkCount += 1;
            if (word === password) {
                setCount(checkCount);
                setCracked(true);
                setCracking(false);
                return
            }
        }
        setCracking(false);
    }

    return (
        <>
            <h1>Simple Password Demo</h1>
            <label htmlFor="brute">Brute Force</label>
            <input
                type="radio"
                value="brute"
                id="brute"
                checked={ passwordCrackMethod === 'brute' }
                onChange={ () => setPasswordCrackMethod('brute') }/>
            <input
                type="radio"
                value="dict"
                id="dict"
                checked={ passwordCrackMethod === 'dict' }
                onChange={ () => setPasswordCrackMethod('dict') }/>
            <label htmlFor="dict">Dictionary</label>
            <PasswordInput
                password={ password }
                setPassword={ setPassword }
                crackPassword={ crackPassword }
            />
            <p>{ cracking === null ? ''
                : cracking ? 'Cracking me some passwords!'
                    : 'All Done Cracking' }</p>
            <p>{ cracking || cracking === null ? ''
                : cracked ? 'Your password\'s been cracked!'
                    : 'Good password...within reason' }</p>
            { cracked ? <p>Number of checks to get to your password: { count }</p> : '' }
        </>
    );
}

export default PasswordDemo;