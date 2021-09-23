import style from './Footer.module.scss';

const Footer = () => {
  return ( 
    <footer className={style.footer}>
      <a className={style.footer__icon} href="https://www.facebook.com/profile.php?id=100071916172494" target="_blank"><img src="/img/fb.svg" alt="Facebook"/></a>
      <a className={style.footer__icon} href="https://www.facebook.com/profile.php?id=100071916172494" target="_blank"><img src="/img/insta.svg" alt="Instagramm"/></a>
      <a className={style.footer__icon} href="https://www.facebook.com/profile.php?id=100071916172494" target="_blank"><img src="/img/twitter.svg" alt="Twitter"/></a>
      <a className={style.footer__icon} href="https://www.facebook.com/profile.php?id=100071916172494" target="_blank"><img src="/img/linkedin.svg" alt="LinkedIn"/></a>
      <a className={style.footer__author} href="https://dribbble.com/tinjo" target="_blank">Original design by Tinjo Thomas</a>
    </footer>
   );
}
 
export default Footer;