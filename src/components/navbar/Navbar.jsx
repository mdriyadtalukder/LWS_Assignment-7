import React from 'react';
import img from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">

            <Link to='/'>
                <img src={img} />
            </Link>
        </nav>
    );
};

export default Navbar;