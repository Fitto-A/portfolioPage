import React from 'react';
import './style.scss';

const Button = ({ children, ...otherProps }) => {
    return (
        <button className='form-btn animacion-btn' { ...otherProps }>
            { children }
        </button>
    )
}

export default Button
