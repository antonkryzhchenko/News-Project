import styles from '../styles/footer.module.css';

import youtube from '../../images/footer-images/youtube.png';
import telegram from '../../images/footer-images/telegram.png';
import google from '../../images/footer-images/google.png';
import linkedin from '../../images/footer-images/linkedin.png';


const Footer = () => {
    return (
        <div>
            <footer>
<div className={styles.footer}>
<div className={styles.footerIcons}>
<a className={styles.footerIcon} href="#"><img src={youtube} alt='youtube' /></a>
<a className={styles.footerIcon} href="#"><img src={telegram} alt='telegram' /></a>
<a className={styles.footerIcon} href="#"><img src={google} alt='google' /></a>
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