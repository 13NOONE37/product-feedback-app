import React, { Dispatch, FC, SetStateAction } from 'react';
import cx from 'classnames';
import Select from 'react-select';

import styles from './dropdown.module.css';
import { DropdownOption } from '@/types/dropdownOption';

interface Props {
  label: string;
  state: DropdownOption;
  setState: Dispatch<SetStateAction<DropdownOption>>;
  options: DropdownOption[];
}

const Dropdown: FC<Props> = ({ label, state, setState, options }) => {
  return (
    <div className={styles.container}>
      <Select
        value={state}
        onChange={(data) => {
          setState({ label: data?.label, value: data?.value });
        }}
        options={options}
        isSearchable={false}
        styles={{
          container(base) {
            return {
              ...base,
              height: '100%',
            };
          },

          control(base) {
            return {
              ...base,
              cursor: 'pointer',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '0.625rem',
              width: 'fit-content',
              height: '100%',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
            };
          },
          singleValue(base) {
            return {
              ...base,
              color: 'var(--color-grey)',
              fontWeight: 'var(--fw-bold)',
              '--label': `"${label}"`,
            };
          },
          indicatorSeparator() {
            return {
              display: 'none',
            };
          },
          dropdownIndicator(base, props) {
            return {
              ...base,
              transform: props.selectProps.menuIsOpen
                ? 'rotate(180deg)'
                : 'rotate(0deg)',
            };
          },
          menu(base) {
            return {
              ...base,
              minWidth: '15.9375rem',
              width: 'fit-content',
              marginTop: '1.5rem',
              border: 'none',
              borderRadius: '0.625rem',
              boxShadow:
                '0 0.625rem 2.5rem -0.4375rem hsla(230,31%,31%,0.3508)',
            };
          },
          menuList(base) {
            return {
              ...base,
              padding: 'unset',
            };
          },
          option(base, props) {
            return {
              ...base,
              cursor: 'pointer',
              backgroundColor: 'transparent',
              borderBottom:
                props.data.value === options.at(-1)?.value
                  ? 'unset'
                  : '1px solid var(--color-grey-light)',
              fontSize: '1rem',
              fontWeight: 'var(--fw-regular)',
              lineHeight: '1.4375rem',
              padding: '0.6875rem 3rem 0.6875rem 1.5rem',
              color: props.isFocused
                ? 'var(--color-purple)'
                : 'var(--color-grey-darker)',
            };
          },
        }}
        classNames={{
          control() {
            return styles.control;
          },
          singleValue() {
            return styles.singleValue;
          },
          dropdownIndicator() {
            return styles.dropdownIndicator;
          },
          option(props) {
            return props.isSelected ? styles.option__selected : '';
          },
        }}
      />
    </div>
  );
};

export default Dropdown;
