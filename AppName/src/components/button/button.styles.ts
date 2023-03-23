import { StyleSheet } from 'react-native';
import {basicSmallTextBold, basicRoundedButton, basicLargeTextBold} from '../utils';

export const styles = StyleSheet.create({
  loginButton: {
    ...basicRoundedButton,
    width: '100%',
    height: 50,
    backgroundColor: '#2ed470',
  },
  loginButtonText: {
    color: 'white',
  },
  filterButton: {
    ...basicRoundedButton,
    paddingHorizontal: 36,
    paddingVertical: 9,
  },
  filterButtonInactive: {
    backgroundColor: '#FFFFFF',
  },
  filterButtonActive: {
    backgroundColor: '#6871EE',
  },
  filterButtonText: {
    ...basicSmallTextBold,
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
  },
  filterButtonTextInactive: {
    color: '#262B4F',
  },
  basicButton: {
    ...basicRoundedButton,
  },
  basicLargeButton: {
    ...basicRoundedButton,
    width: '100%',
    height: 56,
    borderRadius: 12,
    marginTop: 24,
  },
  basicButtonText: {
    ...basicSmallTextBold,
  },
  basicLargeButtonText: {
    ...basicLargeTextBold,
  },
});
