import React from 'react';
import TaskListItem from '../../components/task-list-item/TaskListItem';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './task-list.styles';
import { Filter } from '../../components/filter/Filter';
import { selectFilteredTaskIds } from '../../store/tasks/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilterChanged } from '../../store/filters/slice';
import { getFilterStatusSelector } from '../../store/filters/selectors';
import { Routes } from '../../navigators/routes';

export const TaskList: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();

  const tasksIds = useSelector(selectFilteredTaskIds);
  const status = useSelector(getFilterStatusSelector);

  const onStatusChange = status => dispatch(statusFilterChanged(status));

  const goToAddTaskScreen = () => {
    navigation.navigate(Routes.ADD_TASK);
  };

  const goToEditTaskScreen = id => {
    navigation.navigate(Routes.EDIT_TASK, { id: id });
  };

  const renderedListItems = tasksIds.map(taskId => {
    return <TaskListItem key={taskId} id={taskId} onEdit={goToEditTaskScreen} />;
  });

  return (
    <View style={styles.container}>
      <Filter status={status} onChange={onStatusChange} />
      <Text
        style={{
          alignSelf: 'flex-start',
          marginHorizontal: 16,
          marginVertical: 6,
          color: '#5E6178',
          fontSize: 14,
        }}
      >
        Your Tasks
      </Text>
      <ScrollView>{renderedListItems}</ScrollView>
    </View>
  );
};
