import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './task-item-address-text-area.styles';

export const TaskItemAddressTextArea: React.FC = ({address}) => {
  return (
    <View style={styles.container}>
      <Image source={require('./ic-address-line.png')} style={styles.image} />
      <Text style={styles.text}>{address}</Text>
    </View>
  );
};
