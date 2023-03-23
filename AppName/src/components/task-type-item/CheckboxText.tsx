import { Text, View } from 'react-native';
import { Checkbox } from '../task-list-item/task-item-checkbox/Checkbox';
import React from 'react';
import { styles } from './checkbox-text-item.styles';

export const CheckboxText = ({ children }) => {
  return (
    <View style={styles.container}>
      <Checkbox style={{ width: 18, height: 18 }} />
      <Text style={styles.checkBoxText}>{children}</Text>
    </View>
  );
};
