import React from 'react';
import { View } from 'react-native';
import { styles } from './task-main-content-area.styles';
import { TaskItemTitleArea } from '../task-item-title-area/TaskItemTitleArea';
import { TaskItemAddressTextArea } from '../task-item-address-text-area/TaskItemAddressTextArea';
import { TaskItemButtonArea } from '../task-item-button-area/TaskItemButtonArea';

export const TaskMainContentArea: React.FC = ({title, address, completed, onDelete, onEdit}) => {
  return (
    <View style={styles.container}>
      <TaskItemTitleArea title={title} completed={completed} />
      <TaskItemAddressTextArea address={address} />
      <TaskItemButtonArea onDelete={onDelete} onEdit={onEdit}/>
    </View>
  );
};
