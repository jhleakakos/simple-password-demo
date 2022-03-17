import React, { useState, useEffect } from 'react';
import PasswordInput from './PasswordInput';
import { crackPasswordBruteForce, crackPasswordDictionary } from './utils/crackPassword';

const PasswordDemo = () => {

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
        if (cracking && passwordCrackMethod === 'brute') crackPasswordBruteForce(password, setCount, setCracked, setCracking);
        if (cracking && passwordCrackMethod === 'dict') crackPasswordDictionary(password, setCount, setCracked, setCracking);
    }, [cracking]);

    useEffect(() => {
        setPassword('');
    }, [passwordCrackMethod]);

    const crackPassword = () => {
        setCracked(false);
        setCracking(true);
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