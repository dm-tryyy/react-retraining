import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './task-item-title-area.styles';

export const TaskItemTitleArea: React.FC = ({title, completed}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          completed ? { textDecorationLine: 'line-through' } : null,
        ]}
      >
        {title}
      </Text>
    </View>
  );
};
