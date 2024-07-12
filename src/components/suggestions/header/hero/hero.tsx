import React, { FC } from 'react';
import cx from 'classnames';
import styles from './hero.module.css';
import fonts from '@/styles/fonts.module.css';
import Hamburger from './hamburger/hamburger';

interface Props {
  className?: string;
  showMobile: boolean;
  setShowMobile: React.Dispatch<React.SetStateAction<boolean>>;
}
const Hero: FC<Props> = ({ className = '', showMobile, setShowMobile }) => {
  return (
    <div className={cx(styles.hero, className)}>
      <h1 className={styles.heading}>
        <span className={cx(styles.title, fonts['heading--600'])}>
          Frontend Mentor
        </span>
        <span className={cx(styles.description)}>Feedback Board</span>
      </h1>
      <button
        className={styles.button}
        onClick={(e) => {
          e.stopPropagation();
          setShowMobile((prev) => !prev);
        }}
        aria-roledescription="Open/Close navigation for mobiles"
      >
        <Hamburger active={showMobile} />
      </button>
    </div>
  );
};

export default Hero;
