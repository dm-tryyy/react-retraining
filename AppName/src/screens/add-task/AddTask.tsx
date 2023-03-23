import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './add-task.styles';
import { TaskTypeItem } from '../../components/task-type-item/TaskTypeItem';
import {addTask, TaskType, upsertTask} from '../../store/tasks';
import {
  BasicLargeButton,
  OverlayButton,
} from '../../components/button/Button';
import { Header } from './Header';
import { CheckboxText } from '../../components/task-type-item/CheckboxText';
import { EditText } from '../../components/edit-text/EditText';
import { useDispatch } from 'react-redux';
import { Routes } from '../../navigators/routes';

export const AddTask: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();

  const [selectedTaskType, setSelectedTaskType] = useState('');
  const [taskName, setTaskName] = useState('');
  const emptyTask = {
    id: '',
    title: '',
    address: 'no address provided',
    completed: false,
    type: '',
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

  const createTask = () => {
    const id = Math.floor(Math.random() * 1000000);
    return {
      ...emptyTask,
      id: id,
      title: taskName,
      type: selectedTaskType,
    };
  };

  const handleSaveTask = () => {
    if (isBlank(taskName)) {
      return;
    }
    const task = createTask();
    dispatch(upsertTask(task));
    navigation.navigate(Routes.TASK_LIST);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.imagePlaceholder}>
        <Image
          source={require('../edit-task/image_placeholder.png')}
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
        <EditText onChangeText={handleChangeText} />
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
