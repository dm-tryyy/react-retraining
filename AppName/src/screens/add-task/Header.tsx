import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './header.styles';

export const Header: React.FC = ({ withBackButton, onClick, title }) => {
  if (withBackButton) {
    return (
      <View style={styles.container}>
        <Pressable
          style={{
            position: 'absolute',
            width: 24,
            height: 24,
            marginLeft: 14,
            marginBottom: 13,
            left: 0,
            bottom: 0,
          }}
          onPress={onClick}
        >
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={require('../../assets/ic-arrow.png')}
          />
        </Pressable>
        <Text style={styles.mainText}>{title}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>{title}</Text>
      </View>
    );
  }
};
