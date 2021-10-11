import React from "react";
import styles from "./Header.module.css";
import { appName, fav, linkFav } from "../../locale";

/**
 * This component will be Render header of page.
 * This will have have favity link to see saved favourite item.
 */

const Header = () => {
  return (
    <header className={styles.HeaderWrapper}>
      <a
        href="/"
        aria-label="Homepage"
        area-role="link"
        className={styles.HeaderLogo}
      >
        {appName}
      </a>
      <a
        href={`/${linkFav}`}
        aria-label="Save to Fav"
        area-role="link"
        className={styles.HeaderFav}
      >
        {fav}
      </a>
    </header>
  );
};

export default Header;
