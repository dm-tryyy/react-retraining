import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './header.styles';

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Add new task</Text>
    </View>
  );
};
