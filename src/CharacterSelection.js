import React from 'react';

const CharacterSelection = ({ chars, toggleChars }) => {
    return (
        <>
            <p>Select the characters you want to check against:</p>
            <div>

                <div>
                    <label htmlFor="lower">Lowercase Letters</label>
                    <input
                        id="lower"
                        name="lower"
                        value="lower"
                        type="checkbox"
                        checked={ chars.lower }
                        onChange={ () => toggleChars('lower') }
                    />
                </div>

                <div>
                    <label htmlFor="upper">Uppercase Letters</label>
                    <input
                        id="upper"
                        name="upper"
                        value="upper"
                        type="checkbox"
                        checked={ chars.upper }
                        onChange={ () => toggleChars('upper') }
                    />
                </div>

                <div>
                    <label htmlFor="numbers">Numbers</label>
                    <input
                        id="numbers"
                        name="numbers"
                        value="numbers"
                        type="checkbox"
                        checked={ chars.numbers }
                        onChange={ () => toggleChars('numbers') }
                    />
                </div>

                <div>
                    <label htmlFor="special">Special Characters</label>
                    <input
                        id="special"
                        name="special"
                        value="special"
                        type="checkbox"
                        checked={ chars.special }
                        onChange={ () => toggleChars('special') }
                    />
                </div>

            </div>
        </>
    )
}

export default CharacterSelection;