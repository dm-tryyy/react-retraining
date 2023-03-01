import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import { TaskList } from '../screens';

const Stack = createNativeStackNavigator();

export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.TASK_LIST}>
      <Stack.Screen
        options={{ title: 'TASK LIST' }}
        name={Routes.TASK_LIST}
        component={TaskList}
      />
    </Stack.Navigator>
  );
};
