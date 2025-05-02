import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className='appNav'>
                <a href='/' className='logo'>
                    <img src='./img/logo.png' className='logoNav' alt="Logo"></img>
                </a>
                {/* Hamburger Menü İkonu */}
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
                <ul className={`navList ${menuOpen ? 'active' : ''}`}>
                    <li className='item'>
                        <a href='/about'>
                            Hakkımızda
                        </a>
                    </li>
                    <li className='item'>
                        <a href='/exercise'>
                            Egzersiz
                        </a>
                    </li>
                    <li className='item dropdown'>
                        <span>Oyun</span>
                        <ul className='dropdownContent'>
                            <li>
                                <a href='/Words'>
                                    Kelime Avı
                                </a>
                            </li>
                            <li>
                                <a href='/Match'>
                                    Eşleştirme
                                </a>
                            </li>
                            <li>
                                <a href='/Puzzle'>
                                    Bulmaca
                                </a>
                            </li>
                            <li>
                                <a href='/Senarist'>
                                    Senarist
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='item'>
                        <a className='item-btn' href='/login'>
                            Kayıt Ol / Giriş
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    );
};

export default Navbar;
