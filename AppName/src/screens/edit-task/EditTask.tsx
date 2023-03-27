import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TaskTypeItem } from '../../components/task-type-item/TaskTypeItem';
import { TaskType, upsertTask } from '../../store/tasks';
import {
  BasicLargeButton,
  OverlayButton,
} from '../../components/button/Button';
import { CheckboxText } from '../../components/task-type-item/CheckboxText';
import { EditText } from '../../components/edit-text/EditText';
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskById, tasksSelector } from '../../store/tasks/selectors';
import { Routes } from '../../navigators/routes';
import { styles } from './edit-task.styles';
import { Header } from '../add-task/Header';

export const EditTask: React.FC = ({ navigation, route }) => {
  const id = route.params.id;
  const task = useSelector(state => selectTaskById(state, id));

  const dispatch = useDispatch();

  const [selectedTaskType, setSelectedTaskType] = useState(task.type);
  const [taskName, setTaskName] = useState(task.title);

  const editedTask = {
    ...task,
  };
  const handleSelectType = type => {
    setSelectedTaskType(type);
  };

  const handleChangeText = text => {
    setTaskName(text);
  };

  function isBlank(str) {
    return !str || /^\s*$/.test(str);
  }

  const editTask = () => {
    return {
      ...editedTask,
      title: taskName,
      type: selectedTaskType,
    };
  };

  const handleSaveTask = () => {
    if (isBlank(taskName)) {
      return;
    }
    const updatedTask = editTask();
    dispatch(upsertTask(updatedTask));
    navigation.navigate(Routes.TASKS_SCREEN);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Image
          source={require('./image_placeholder.png')}
          style={{ width: '90%', height: 100, alignSelf: 'center' }}
        />
      </View>
      <OverlayButton style={styles.overlay}>+ Add photo</OverlayButton>
      <View style={styles.addTaskAreaContainer}>
        <Text
          style={[styles.text, { alignSelf: 'flex-start', paddingBottom: 2 }]}
        >
          Task name
        </Text>
        <EditText value={taskName} onChangeText={handleChangeText} />
        <CheckboxText>Add location</CheckboxText>
        <Text
          style={[styles.text, { alignSelf: 'flex-start', color: '#080C2F50' }]}
        >
          Type
        </Text>
        <TaskTypeItem
          type={TaskType.Urgent}
          selectedTaskType={selectedTaskType}
          onClick={handleSelectType}
        />
        <TaskTypeItem
          type={TaskType.Regular}
          selectedTaskType={selectedTaskType}
          onClick={handleSelectType}
        />
        <TaskTypeItem
          type={TaskType.Low}
          selectedTaskType={selectedTaskType}
          onClick={handleSelectType}
        />
        <BasicLargeButton onPress={handleSaveTask}>Save</BasicLargeButton>
      </View>
    </View>
  );
};
