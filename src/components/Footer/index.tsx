import React from "react";
import styles from "./Footer.module.css";
import { appName } from "../../locale";

/**
 * This component will be render footer of page
 */

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p className="footerText">
        {appName} &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};
export default Footer;
