import React, { useState, useEffect } from 'react';
import PasswordInput from './PasswordInput';
import CharacterSelection from './CharacterSelection';
import { crackPasswordBruteForce, crackPasswordDictionary } from './utils/crackPassword';
import './PasswordDemo.css';
import { lowercaseLetters, uppercaseLetters, numbers, specialCharacters } from './utils/characters';
import PasswordOutput from './PasswordOutput';

const PasswordDemo = () => {


    const [passwordCrackMethod, setPasswordCrackMethod] = useState('brute');
    const [password, setPassword] = useState('');
    const [cracked, setCracked] = useState(null);
    const [cracking, setCracking] = useState(null);
    const [count, setCount] = useState(0);
    const [chars, setChars] = useState({
        lower: true,
        upper: false,
        numbers: false,
        special: false
    });

    const checkCharacters = [
        ...(chars.lower ? lowercaseLetters : []),
        ...(chars.upper ? uppercaseLetters : []),
        ...(chars.numbers ? numbers : []),
        ...(chars.special ? specialCharacters : [])
    ];

    useEffect(() => {
        setCracked(false);
        setCracking(null)
    }, [password]);

    useEffect(() => {
        if (cracking && passwordCrackMethod === 'brute') crackPasswordBruteForce(password, setCount, setCracked, setCracking, checkCharacters);
        if (cracking && passwordCrackMethod === 'dict') crackPasswordDictionary(password, setCount, setCracked, setCracking, checkCharacters);
    }, [cracking]);

    useEffect(() => {
        setPassword('');
    }, [passwordCrackMethod]);

    const crackPassword = () => {
        setCracked(false);
        setCracking(true);
    }

    const toggleChars = (char) => {
        setChars({ ...chars, [char]: !(chars[char]) });
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

            <hr className="PasswordDemo-hr-separator"/>

            <CharacterSelection
                chars={ chars }
                toggleChars={ toggleChars }
            />

            <div className="PasswordDemo-display-chars">
                { (checkCharacters.toString()).replaceAll(',', '') }
            </div>

            <PasswordInput
                password={ password }
                setPassword={ setPassword }
                crackPassword={ crackPassword }
            />

            <PasswordOutput
                cracking={ cracking }
                cracked={ cracked }
                count={ count }
            />
        </>
    );
}

export default PasswordDemo;