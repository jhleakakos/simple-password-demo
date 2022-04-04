import React from 'react';
import './CharacterSelection.css';

const CharacterSelection = ({ chars, toggleChars }) => {
    return (
        <>
            <div className="CharacterSelection-flex">
                <div>
                    <label
                        htmlFor="lower"
                        className={ chars.lower ? 'CharacterSelection-label-checked' : 'CharacterSelection-label' }
                    >Lowercase Letters</label>
                    <input
                        id="lower"
                        name="lower"
                        value="lower"
                        type="checkbox"
                        checked={ chars.lower }
                        onChange={ () => toggleChars('lower') }
                        className="CharacterSelection-input"
                    />
                </div>

                <div>
                    <label
                        htmlFor="upper"
                        className={ chars.upper ? 'CharacterSelection-label-checked' : 'CharacterSelection-label' }
                    >Uppercase Letters</label>
                    <input
                        id="upper"
                        name="upper"
                        value="upper"
                        type="checkbox"
                        checked={ chars.upper }
                        onChange={ () => toggleChars('upper') }
                        className="CharacterSelection-input"
                    />
                </div>

                <div>
                    <label
                        htmlFor="numbers"
                        className={ chars.numbers ? 'CharacterSelection-label-checked' : 'CharacterSelection-label' }
                    >Numbers</label>
                    <input
                        id="numbers"
                        name="numbers"
                        value="numbers"
                        type="checkbox"
                        checked={ chars.numbers }
                        onChange={ () => toggleChars('numbers') }
                        className="CharacterSelection-input"
                    />
                </div>

                <div>
                    <label
                        htmlFor="special"
                        className={ chars.special ? 'CharacterSelection-label-checked' : 'CharacterSelection-label' }
                    >Special Characters</label>
                    <input
                        id="special"
                        name="special"
                        value="special"
                        type="checkbox"
                        checked={ chars.special }
                        onChange={ () => toggleChars('special') }
                        className="CharacterSelection-input"
                    />
                </div>

            </div>
        </>
    )
}

export default CharacterSelection;