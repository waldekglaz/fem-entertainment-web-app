import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

import ProfileImg from "../assets/image-avatar.png";
import styles from "./Header.module.css";
import HomeIcon from "../assets/icon-nav-home.svg";
import MoviesIcon from "../assets/icon-nav-movies.svg";
import TvSeriesIcon from "../assets/icon-nav-tv-series.svg";
import BookmarkedIcon from "../assets/icon-nav-bookmark.svg";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>

      <nav className={styles.nav}>
        <NavLink to="/" className={styles.navlink}>
          <img src={HomeIcon} alt="" />
        </NavLink>
        <NavLink to="/movies" className={styles.navlink}>
          <img src={MoviesIcon} alt="" />
        </NavLink>
        <NavLink to="/tv-series" className={styles.navlink}>
          <img src={TvSeriesIcon} alt="" />
        </NavLink>
        <NavLink to="/bookmarked" className={styles.navlink}>
          <img src={BookmarkedIcon} alt="" />
        </NavLink>
      </nav>
      <img src={ProfileImg} alt="profile image" className={styles.avatar} />
    </header>
  );
}

export default Header;
