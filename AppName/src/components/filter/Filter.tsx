import { View } from 'react-native';
import React from 'react';
import { styles } from './filter.styles';
import { FilterButton } from '../button/Button';
import { StatusFilters } from '../../store/filters/slice';

export const Filter = ({ status, onChange }) => {
  const renderedFilterButtons = Object.keys(StatusFilters).map(key => {
    const value = StatusFilters[key];
    const handleClick = () => onChange(value);
    const isActive = value === status;

    return (
      <FilterButton
        key={value}
        isActive={isActive}
        onPress={handleClick}
        text={value}
      />
    );
  });

  return <View style={styles.container}>{renderedFilterButtons}</View>;
};
