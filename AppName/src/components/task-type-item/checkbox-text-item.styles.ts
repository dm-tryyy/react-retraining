import { StyleSheet } from 'react-native';
import { basicMediumTextBold } from '../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    margin: 6,
    alignItems: 'center',
    marginVertical: 25,
  },
  checkBoxText: {
    ...basicMediumTextBold,
  },
});
