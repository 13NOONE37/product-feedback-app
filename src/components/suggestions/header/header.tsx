'use client';
import React, { useRef, useState } from 'react';
import cx from 'classnames';
import styles from './header.module.css';
import Hero from './hero/hero';
import Categories from './categories/categories';
import Roadmap from './roadmap/roadmap';
import useDetectClickOutside from '@/hooks/useClickOutside';

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useDetectClickOutside(mobileMenuRef, setShowMobile);

  return (
    <header className={styles.header}>
      <div
        className={cx(styles.mask, {
          [styles.mask__visible]: showMobile,
        })}
      ></div>
      <Hero
        className={styles.hero}
        showMobile={showMobile}
        setShowMobile={setShowMobile}
      />
      <div
        className={cx(styles.content, {
          [styles.content__visible]: showMobile,
        })}
        ref={mobileMenuRef}
      >
        <Categories />
        <Roadmap />
      </div>
    </header>
  );
};

export default Header;
