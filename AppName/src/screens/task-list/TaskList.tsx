import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './task-list.styles';

export const TaskList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Task list</Text>
    </View>
  );
};
