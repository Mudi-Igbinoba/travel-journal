import React from 'react';
import earth from '../assets/images/earth.png';

export default function Header() {
    return (
        <header>
            <img src={earth} />
            <h1>my travel journal.</h1>
        </header>
    );
}
