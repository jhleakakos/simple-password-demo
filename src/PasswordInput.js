import React from 'react';

const PasswordInput = ({ password, setPassword, crackPassword }) => {
    return (
        <div>
            <p>Your current password is: { password }</p>

            <div>
                <div>
                    <label htmlFor="pwd">Password: </label>
                    <input
                        id="pwd"
                        type="text"
                        maxLength="6"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>

                <button onClick={ crackPassword }>Crack Me!</button>
            </div>
        </div>
    )
}

export default PasswordInput;