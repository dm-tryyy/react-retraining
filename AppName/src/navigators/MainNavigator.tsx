import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import { TaskList } from '../screens';
import { AddTask } from '../screens/add-task/AddTask';
import { EditTask } from '../screens/edit-task/EditTask';

const Stack = createNativeStackNavigator();

export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.TASK_LIST}>
      <Stack.Screen
        options={{ title: 'TASK LIST' }}
        name={Routes.TASK_LIST}
        component={TaskList}
      />
      <Stack.Screen
        options={{ title: 'ADD TASK' }}
        name={Routes.ADD_TASK}
        component={AddTask}
      />
      <Stack.Screen
        options={{ title: 'EDIT TASK' }}
        name={Routes.EDIT_TASK}
        component={EditTask}
      />
    </Stack.Navigator>
  );
};
