import React from 'react';
import styles from './FloatingNavStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

const FloatingNav = () => {
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { label: 'Home', target: 'hero' },
        { label: 'Projects', target: 'projects' },
        { label: 'Skills', target: 'skills' },
        { label: 'Certificates', target: 'certificates' },
        { label: 'Contact', target: 'contact' },
    ];

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.floatingNav}>
            {navItems.map((item) => (
                <button
                    key={item.target}
                    onClick={() => handleScroll(item.target)}
                    className={styles.navItem}
                >
                    {item.label}
                </button>
            ))}
            <div className={styles.separator}></div>
            <img
                className={styles.themeIcon}
                src={theme === 'light' ? sun : moon}
                alt="Toggle Theme"
                onClick={toggleTheme}
            />
        </nav>
    );
};

export default FloatingNav;
