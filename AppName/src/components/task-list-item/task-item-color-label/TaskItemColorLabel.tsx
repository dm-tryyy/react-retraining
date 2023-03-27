import React from 'react';
import { View } from 'react-native';
import { styles } from './task-item-color-label.styles';
import { TaskType } from '../../../store/tasks';
import { ColorPallette } from '../../utils';

export const TaskItemColorLabel: React.FC = ({ type }) => {
  let color;
  switch (type) {
    case TaskType.Low:
      color = ColorPallette.PearlAqua;
      break;
    case TaskType.Regular:
      color = ColorPallette.MinionYellow;
      break;
    case TaskType.Urgent:
      color = ColorPallette.ShimmeringBlush;
      break;
  }
  return <View style={[styles.container, { backgroundColor: color }]} />;
};
