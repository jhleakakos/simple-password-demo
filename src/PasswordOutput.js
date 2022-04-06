import React from 'react';
import './PasswordOutput.css';

const PasswordOutput = ({ cracking, cracked, count }) => {
    return (
        <div className="PasswordOutput">
            <p>Number of checks to get to your password: <span>
                { cracked ? count.toLocaleString()
                    : cracking
                        ? 'hang one one moment while we crack this password'
                        : 'more than we tried'
                }
            </span>< /p>
        </div>
    )
}

export default PasswordOutput;