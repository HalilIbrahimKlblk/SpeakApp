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
                        <a href='/About'>
                            Hakkımızda
                        </a>
                    </li>
                    <li className='item'>
                        <a href='/Exercise'>
                            Egzersiz
                        </a>
                    </li>
                    <li className='item dropdown'>
                        <span><a href='/Game'>Oyun</a></span>
                        <ul className='dropdownContent'>
                            <li>
                                <a href='/Hunt'>
                                    Kelime Avı
                                </a>
                            </li>
                            <li>
                                <a href='/error'>
                                    Eşleştirme
                                </a>
                            </li>
                            <li>
                                <a href='/error'>
                                    Bulmaca
                                </a>
                            </li>
                            <li>
                                <a href='/error'>
                                    Senarist
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='item'>
                        <a className='item-btn' href='/Login'>
                            Kayıt Ol / Giriş
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    );
};

export default Navbar;
