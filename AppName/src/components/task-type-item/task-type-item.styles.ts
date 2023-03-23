import { StyleSheet } from 'react-native';
import {basicMediumTextBold} from "../utils";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 38,
    borderRadius: 8,
    paddingEnd: 6,
    paddingTop: 6,
    paddingBottom: 6,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    alignItems: 'center',
  },
  checkBoxText: {
    ...basicMediumTextBold,
  },
});
