import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { changeTheme } from '../../redux/theme/actions';

import SwitcherTheme from './SwitcherTheme';

import classNames from 'classnames';

import logo from '../../images/logo.png';
import favourites from '../../images/favourites.png';

import styles from '../styles/header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.theme);

    const switchTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        dispatch(changeTheme(nextTheme));
    }

    const classHeader = classNames(styles.header, {
        [styles.header_night]: theme === 'dark',
    });

    const classHeaderCategories = classNames(styles.headerCategories, {
        [styles.headerCategories_night]: theme === 'dark',
    });

    const classHeaderUl = classNames(styles.headerUl, {
        [styles.headerUl_night]: theme === 'dark',
    });

    return (
        <div className={classHeader}>
            <div className={styles.header}>
            <Link to='/'>
            <img
            className={styles.headerLogo}
            src={logo}
            alt='logo'
            />
            </Link>
            <div className={classHeaderCategories}>
                <ul className={classHeaderUl}>
                    <li className={styles.headerLi}>Politics</li>
                    <li className={styles.headerLi}>Business</li>
                    <li className={styles.headerLi}>Technology</li>
                    <li className={styles.headerLi}>Sports</li>
                    <li className={styles.headerLi}>Health</li>
                </ul>
            <Link to='/read'>
            <div className={styles.headerFavourites}>
                <img
                className={styles.headerFavouritesLogo}
                src={favourites}
                alt='favourites'
                />
            </div>
            </Link>
            </div>
            </div>
            <div className={styles.headerSwitcher}>
                <SwitcherTheme switchTheme={switchTheme} />
            </div>
        </div>
    )
}
export default Header;