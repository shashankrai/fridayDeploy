import React from "react";
import styles from "./componentHeader.module.css";
import type { ComponentHeaderProps } from "../../types";

/**
 * This component will be render subHeader of page
 * this could be enable diabled in mobile and desktop
 * @param content - data to show
 * @param isMobile - enable disable in mobile
 * @param isShow - show/hide
 */

const ComponentHeader = ({
  content,
  isMobile,
  isShow,
}: ComponentHeaderProps) => {
  return isShow ? (
    <div className={styles.Header} data-testid="subheader">
      {isShow && (
        <h1 className={isMobile ? styles.OnlyMobile : styles.OnlyDesktop}>
          {content}
        </h1>
      )}
    </div>
  ) : null;
};

export default ComponentHeader;
