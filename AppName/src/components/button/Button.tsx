import React from 'react';
import { Pressable, Text, ActivityIndicator, Image, View } from 'react-native';
import { styles } from './button.styles';
import { ButtonTypes } from './button.types';

export const Button: React.FC<ButtonTypes> = ({
  isLoading,
  children,
  ...rest
}) => {
  return (
    <Pressable {...rest} style={styles.loginButton}>
      {isLoading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles.loginButtonText}>{children}</Text>
      )}
    </Pressable>
  );
};

export const FilterButton = ({ isActive, onPress, text }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.filterButton,
        isActive ? styles.filterButtonActive : styles.filterButtonInactive,
      ]}
    >
      <Text
        style={[
          styles.filterButtonText,
          isActive
            ? styles.filterButtonTextActive
            : styles.filterButtonTextInactive,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export const BasicButton = ({ style, children, onClick }) => {
  return (
    <Pressable onPress={onClick} style={[styles.basicButton, { style }]}>
      <Text style={styles.basicButtonText}>{children}</Text>
    </Pressable>
  );
};

export const BasicLargeButton = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.basicLargeButton}>
      <Text style={styles.basicLargeButtonText}>{children}</Text>
    </Pressable>
  );
};

export const OverlayButton = ({ style, children }) => {
  return (
    <Pressable style={style}>
      <Text style={styles.basicButtonText}>{children}</Text>
    </Pressable>
  );
};

export const TabBarIcon = ({ focused, activeIcon, inActiveIcon, title }) => {
  const iconSrc = focused ? activeIcon : inActiveIcon;
  const color = focused ? '#6871EE' : 'grey';
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 18 }}>
      <Image source={iconSrc} style={{ width: 22, height: 22 }} />
      <Text style={{ color: color, fontSize: 12, marginTop: 5 }}>{title}</Text>
    </View>
  );
};
