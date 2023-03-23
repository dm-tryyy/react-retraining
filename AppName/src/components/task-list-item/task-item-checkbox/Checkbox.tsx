import React from 'react';
import { Image, Pressable } from 'react-native';
import {styles} from "../task-list-item.styles";

export const Checkbox = ({ style, checked, onChange }) => {
  const source = checked
    ? require('./ic-checked.png')
    : require('./ic-unchecked.png');
  return (
    <Pressable
      style={[
        {
          width: 16,
          height: 16,
          borderRadius: 4,
          marginRight: 8,
        },
        { ...style },
      ]}
      onPress={onChange}
    >
      <Image source={source} style={styles.image} />
    </Pressable>
  );
};
