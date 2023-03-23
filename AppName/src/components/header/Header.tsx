import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { styles } from './header.styles';
import { filteredTasksSelector } from '../../store/tasks/selectors';
import { useSelector } from 'react-redux';
import { BasicButton } from '../button/Button';

export const Header: React.FC = ({onAddTaskClick}) => {
  const filteredTasks = useSelector(filteredTasksSelector);
  return (
    <View style={styles.container}>
      <View style={styles.addTaskContainer}>
        <Text style={styles.invitationText}>Hello, there</Text>
        <BasicButton onClick={onAddTaskClick}>+ Add Task</BasicButton>
      </View>
      <Text style={styles.mainText}>You have {'\n'}{filteredTasks.length} tasks here</Text>
    </View>
  );
};
