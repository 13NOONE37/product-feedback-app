import React, { FC, ReactNode } from 'react';
import Header from '@/components/header/header';
import styles from './layout.module.css';
const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
