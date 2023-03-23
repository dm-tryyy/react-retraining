import { StyleSheet, TextInput, View } from 'react-native';
import { styles } from './edit-text.styles';
import React from 'react';

export const EditText = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
    </View>
  );
};
