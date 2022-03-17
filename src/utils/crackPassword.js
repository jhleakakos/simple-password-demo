import {
    lowercaseLetters,
    uppercaseLetters,
    numbers,
    specialCharacters
} from './characters';

import dictionaryWordList from './words';

const checkCharacters = [
    ...lowercaseLetters,
    // ...uppercaseLetters,
    // ...numbers,
    // ...specialCharacters
];

const crackPasswordBruteForce = (password, setCount, setCracked, setCracking) => {
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

const crackPasswordDictionary = (password, setCount, setCracked, setCracking) => {
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

export { crackPasswordBruteForce, crackPasswordDictionary };