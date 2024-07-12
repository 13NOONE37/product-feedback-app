import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cx from 'classnames';
import styles from './button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  predefinedStyle: 'fill' | 'text' | 'custom';
  Icon?: ReactNode;
  activeClassName?: string;
}
const Button: FC<Props> = ({
  predefinedStyle,
  Icon = '',
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cx(styles.button, styles[predefinedStyle], className)}
    >
      {Icon && Icon}
      {children}
    </button>
  );
};

export default Button;
