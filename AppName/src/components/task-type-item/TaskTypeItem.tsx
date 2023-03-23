import { Checkbox } from '../task-list-item/task-item-checkbox/Checkbox';
import { Text, View } from 'react-native';
import React from 'react';
import { TaskItemColorLabel } from '../task-list-item/task-item-color-label/TaskItemColorLabel';
import { styles } from './task-type-item.styles';

export const TaskTypeItem = ({ type, selectedTaskType, onClick }) => {
  const checked = selectedTaskType === type;
  const handleTaskTypeClick = () => onClick(type);
  return (
    <View style={styles.container}>
      <TaskItemColorLabel type={type} />
      <Checkbox checked={checked} onChange={handleTaskTypeClick} />
      <Text style={styles.checkBoxText}>{type}</Text>
    </View>
  );
};
