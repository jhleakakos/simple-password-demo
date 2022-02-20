import React from 'react';

const PasswordInput = ({ password, setPassword, crackPasswordBruteForce, crackPasswordDictionary }) => {
    return (
        <div>
            <p>Your current password is: {password}</p>

            <div>
                <div>
                    <label htmlFor='pwd'>Password: </label>
                    <input
                        id='pwd'
                        type='text'
                        maxLength='6'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button onClick={crackPasswordBruteForce} >Brute Force Crack Me!</button>
                <button onClick={crackPasswordDictionary}>Dictionary Crack Me!</button>
            </div>
        </div>
    )
}

export default PasswordInput;