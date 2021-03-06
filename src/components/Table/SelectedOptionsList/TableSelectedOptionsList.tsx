import './TableSelectedOptionsList.css';

import React from 'react';

import { IconClose } from '../../../icons/IconClose/IconClose';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { TableSelectedOption } from '../SelectedOption/TableSelectedOption';

const cnTableSelectedOptionsList = cn('TableSelectedOptionsList');

type Props = {
  values: Array<{ id: string; name: string }>;
  onRemove: (id: string) => void;
  onReset: () => void;
};

export const TableSelectedOptionsList: React.FC<Props> = ({ values, onRemove, onReset }) => {
  return (
    <div className={cnTableSelectedOptionsList(null)}>
      <div className={cnTableSelectedOptionsList('Options')}>
        {values.map((option) => (
          <div className={cnTableSelectedOptionsList('Option')} key={option.id}>
            <TableSelectedOption name={option.name} onRemove={(): void => onRemove(option.id)} />
          </div>
        ))}
      </div>
      <Button
        type="button"
        onClick={onReset}
        title="Сбросить все фильтры"
        size="xs"
        view="clear"
        onlyIcon
        iconLeft={IconClose}
        className={cnTableSelectedOptionsList('Button')}
      />
    </div>
  );
};
