import './SelectDropdown.css';

import React from 'react';

import { cnSelect } from '../cnSelect';

type Props = {
  className?: string;
  role?: string;
  children: React.ReactNode;
};

export const SelectDropdown = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={cnSelect('Dropdown', [className])} ref={ref} {...restProps}>
      {children}
    </div>
  );
});
