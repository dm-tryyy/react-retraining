import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { styles } from './task-item-button-area.styles';

export const TaskItemButtonArea = ({onDelete, onEdit}) => {
  return (
    <View style={styles.container}>
        <Pressable onPress={onDelete} style={styles.item}>
            <Image source={require('./ic-delete-task.png')} style={styles.image} />
        </Pressable>
      <Pressable onPress={onEdit} style={styles.item}>
        <Image source={require('./ic-edit-task.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};
