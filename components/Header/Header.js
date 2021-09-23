import Link from 'next/link';
import style from './Header.module.scss';

const Header = ({activeLink}) => {
  function addAClassName(activeLink, link) {
    return activeLink === link ? style['nav__link--active'] : style['nav__link'];
  } 

  return (
   <header className={style.header}>
     <nav className={style.nav}>
       <div className={style.nav__list}>
       <Link href="/">
          <a className={addAClassName(activeLink, 'Home')}>Home</a>
        </Link>
        <Link href="/works">
          <a className={addAClassName(activeLink, 'Works')}>Works</a>
        </Link>
        <Link href="/blog">
          <a className={addAClassName(activeLink, 'Blog')}>Blog</a>
        </Link>
       </div>
     </nav>
   </header>
  );
};

export default Header;