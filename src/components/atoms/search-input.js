import * as React from 'react';
import {container, input, button, } from './search-input.module.css';

export const SearchInput = React.forwardRef((props, ref) => {
    const {placeholder, onClick} = props;

    return (
    <>
        <div className={container}>
            <input
                className={input}
                type="search"
                ref={ref}
                placeholder={placeholder}
            />
            <button className={button} onClick={onClick}>
                Search
            </button>
        </div>
    </>
    );
});