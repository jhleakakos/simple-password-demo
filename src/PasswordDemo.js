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

    const [password, setPassword] = useState('');
    const [cracked, setCracked] = useState(null);
    const [cracking, setCracking] = useState({ current: null, method: '' });
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCracked(false);
        setCracking({current: null, method: ''})
    }, [password]);

    useEffect(() => {
        if (cracking.method === 'brute') crackPasswordBruteForce();
        if (cracking.method === 'dict') crackPasswordDictionary();
    }, [cracking]);

    const crackPassword = (crackMethod) => {
        setCracking({ current: true, method: crackMethod });
        setCracked(false);
    }

    const crackPasswordBruteForce = () => {
        let checkCount = 0;

        for (let letter1 of checkCharacters) {
            checkCount += 1;
            let passwordGuess1 = letter1;
            if (passwordGuess1 === password) {
                setCount(checkCount);
                setCracked(true);
                setCracking({ current: false, method: '' });
                return
            }

            for (let letter2 of checkCharacters) {
                checkCount += 1;
                let passwordGuess2 = `${ passwordGuess1 }${ letter2 }`;
                if (passwordGuess2 === password) {
                    setCount(checkCount);
                    setCracked(true);
                    setCracking({ current: false, method: '' });
                    return
                }

                for (let letter3 of checkCharacters) {
                    checkCount += 1;
                    let passwordGuess3 = `${ passwordGuess2 }${ letter3 }`;
                    if (passwordGuess3 === password) {
                        setCount(checkCount);
                        setCracked(true);
                        setCracking({ current: false, method: '' });
                        return
                    }

                    for (let letter4 of checkCharacters) {
                        checkCount += 1;
                        let passwordGuess4 = `${ passwordGuess3 }${ letter4 }`;
                        if (passwordGuess4 === password) {
                            setCount(checkCount);
                            setCracked(true);
                            setCracking({ current: false, method: '' });
                            return
                        }

                        for (let letter5 of checkCharacters) {
                            checkCount += 1;
                            let passwordGuess5 = `${ passwordGuess4 }${ letter5 }`;
                            if (passwordGuess5 === password) {
                                setCount(checkCount);
                                setCracked(true);
                                setCracking({ current: false, method: '' });
                                return
                            }

                            for (let letter6 of checkCharacters) {
                                checkCount += 1;
                                let passwordGuess6 = `${ passwordGuess5 }${ letter6 }`;
                                if (passwordGuess6 === password) {
                                    setCount(checkCount);
                                    setCracked(true);
                                    setCracking({ current: false, method: '' });
                                    return
                                }
                            }
                        }
                    }
                }
            }
        }
        setCracking({ current: false, method: '' });
    }

    const crackPasswordDictionary = () => {
        let checkCount = 0;

        for (let word of dictionaryWordList) {
            checkCount += 1;
            if (word === password) {
                setCount(checkCount);
                setCracked(true);
                setCracking({ current: false, method: '' });
                return
            }
        }
        setCracking({ current: false, method: '' });
    }

    return (
        <>
            <h1>Simple Password Demo</h1>
            <PasswordInput
                password={ password }
                setPassword={ setPassword }
                crackPasswordBruteForce={ () => crackPassword('brute') }
                crackPasswordDictionary={ () => crackPassword('dict') }
            />
            <p>{ cracking.current === null ? ''
                : cracking.current ? 'Cracking me some passwords!'
                : 'All Done Cracking' }</p>
            <p>{ cracking.current || cracking.current === null ? ''
                : cracked ? 'Your password\'s been cracked!'
                    : 'Good password...within reason' }</p>
            { cracked ? <p>Number of checks to get to your password: { count }</p> : '' }
        </>
    );
}

export default PasswordDemo;