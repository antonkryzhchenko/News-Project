import styles from '../styles/footer.module.css';

import youtube from '../../images/footer-images/youtube.png';
import instagram from '../../images/footer-images/instagram.png';
import twitter from '../../images/footer-images/twitter.png';
import linkedin from '../../images/footer-images/linkedin.png';


const Footer = () => {
    return (
        <div>
            <footer>
<div className={styles.footer}>
<div className={styles.footerIcons}>
<a className={styles.footerIcon} href="#"><img src={youtube} alt='youtube' /></a>
<a className={styles.footerIcon} href="#"><img src={instagram} alt='instagram' /></a>
<a className={styles.footerIcon} href="#"><img src={twitter} alt='twitter' /></a>
<a className={styles.footerIcon} href="#"><img src={linkedin} alt='linkedin' /></a>
</div>

<div className={styles.row}>
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms of use</a></li>
<li><a href="#">Accessibility</a></li>
</ul>
</div>

<div className={styles.row}>
    Copyright © 2022 All rights reserved. Designed By Anton Kryzhchenko
</div>
</div>
</footer>

        </div>
    )
}
export default Footer;