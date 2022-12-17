import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { changeTheme } from '../../redux/theme/actions';
import { ADD_CATEGORY } from '../../redux/news/actions';

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
        [styles.headerDark]: theme === 'dark',
    });

    return (
        <div>
            <div className={classHeader}>
            <Link to='/'>
            <img
            className={styles.headerLogo}
            src={logo}
            alt='logo'
            />
            </Link>
            <div className={styles.headerCategories}>
                <ul className={styles.headerUl}>
                    <Link to={'/politics'}><li className={styles.headerLi} onClick={(e) => dispatch(ADD_CATEGORY(e.target.textContent.toLowerCase()))}>Politics</li></Link>
                    <Link to={'/business'}><li className={styles.headerLi} onClick={(e) => dispatch(ADD_CATEGORY(e.target.textContent.toLowerCase()))}>Business</li></Link>
                    <Link to={'/technology'}><li className={styles.headerLi} onClick={(e) => dispatch(ADD_CATEGORY(e.target.textContent.toLowerCase()))}>Technology</li></Link>
                    <Link to={'/sports'}><li className={styles.headerLi} onClick={(e) => dispatch(ADD_CATEGORY(e.target.textContent.toLowerCase()))}>Sports</li></Link>
                    <Link to={'/health'}><li className={styles.headerLi} onClick={(e) => dispatch(ADD_CATEGORY(e.target.textContent.toLowerCase()))}>Health</li></Link>
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
            <div className={styles.headerSwitcher}>
                <SwitcherTheme switchTheme={switchTheme} />
            </div>
            </div>
        </div>
    )
}
export default Header;