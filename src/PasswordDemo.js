import React, { useState, useEffect } from 'react';
import PasswordInput from './PasswordInput';
import { crackPasswordBruteForce, crackPasswordDictionary } from './utils/crackPassword';
import './PasswordDemo.css';

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
            <h1 className="PasswordDemo-header">Simple Password Demo</h1>
            <div className="PasswordDemo-input-flex">
                <label
                    className={ passwordCrackMethod === 'brute' ? 'PasswordDemo-rb-label-checked' : 'PasswordDemo-rb-label' }
                    htmlFor="brute"
                >
                    Brute Force</label>
                <input
                    type="radio"
                    value="brute"
                    name="crackMethod"
                    id="brute"
                    checked={ passwordCrackMethod === 'brute' }
                    onChange={ () => setPasswordCrackMethod('brute') }
                    className="PasswordDemo-rb-input"

                />
                <input
                    type="radio"
                    value="dict"
                    name="crackMethod"
                    id="dict"
                    checked={ passwordCrackMethod === 'dict' }
                    onChange={ () => setPasswordCrackMethod('dict') }
                    className="PasswordDemo-rb-input"
                />
                <label
                    className={ passwordCrackMethod === 'dict' ? 'PasswordDemo-rb-label-checked' : 'PasswordDemo-rb-label' }
                    htmlFor="dict"
                >
                    Dictionary</label>
            </div>
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
            { cracked ? <p>Number of checks to get to your password: { count.toLocaleString() }</p> : '' }
        </>
    );
}

export default PasswordDemo;