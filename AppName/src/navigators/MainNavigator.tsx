import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import { TaskList } from '../screens';
import { AddTask } from '../screens/add-task/AddTask';
import { EditTask } from '../screens/edit-task/EditTask';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapScreen } from '../screens/map/MapScreen';
import { GeneratorScreen } from '../screens/generator/Generator';
import { TaskListHeader } from '../components/header/TaskListHeader';
import { Header } from '../screens/add-task/Header';
import { TabBarIcon } from '../components/button/Button';
import images from '../assets';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.TASKS_SCREEN}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          height: 76,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={Routes.TASKS_SCREEN}
        component={TaskList}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              activeIcon={images.tabIcons.iconTasksActive}
              inActiveIcon={images.tabIcons.iconTasksInactive}
              title={'Tasks'}
            />
          ),
          header: ({ navigation }) => {
            return (
              <TaskListHeader
                onClick={() => navigation.navigate(Routes.ADD_TASK)}
              />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              activeIcon={images.tabIcons.iconMapActive}
              inActiveIcon={images.tabIcons.iconMapInactive}
              title={'Map'}
            />
          ),
          header: () => {
            return <Header title={'Map'} />;
          },
        }}
        name={Routes.MAP_SCREEN}
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              activeIcon={images.tabIcons.iconGeneratorActive}
              inActiveIcon={images.tabIcons.iconGeneratorInactive}
              title={'Generator'}
            />
          ),
          header: () => {
            return <Header title={'Generator'} />;
          },
        }}
        name={Routes.GENERATOR_SCREEN}
        component={GeneratorScreen}
      />
    </Tab.Navigator>
  );
};

export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={Routes.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          header: ({ navigation }) => {
            return (
              <Header
                withBackButton={true}
                title={'Add task'}
                onClick={() => navigation.goBack()}
              />
            );
          },
        }}
        name={Routes.ADD_TASK}
        component={AddTask}
      />
      <Stack.Screen
        options={{
          header: ({ navigation }) => {
            return (
              <Header
                withBackButton={true}
                title={'Edit task'}
                onClick={() => navigation.goBack()}
              />
            );
          },
        }}
        name={Routes.EDIT_TASK}
        component={EditTask}
      />
    </Stack.Navigator>
  );
};
