import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './task-item-color-label.styles';
import { TaskType } from '../../../store/tasks';
import { Color } from '../../utils';

export const TaskItemColorLabel: React.FC = ({ type }) => {
  let color;
  switch (type) {
    case TaskType.Low:
      color = Color.PearlAqua;
      break;
    case TaskType.Regular:
      color = Color.MinionYellow;
      break;
    case TaskType.Urgent:
      color = Color.ShimmeringBlush;
      break;
  }
  return <View style={[styles.container, { backgroundColor: color }]} />;
};
