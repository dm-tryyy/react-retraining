import { StyleSheet } from 'react-native';
import {basicMediumText, basicMediumTextBold, basicRoundedButton} from '../../components/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8FAFF',
  },
  addTaskAreaContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection:'column',
    backgroundColor: '#F8FAFF',
    paddingHorizontal: 15,
  },
  imagePlaceholder: {
    height: 100,
    width: '100%',
    marginBottom: 31,
    marginTop: 9,
    backgroundColor: '#FFFFFF',
  },
  checkBoxText: {
    ...basicMediumTextBold,
  },
  text: {
    ...basicMediumText,
    color: '#464963',
  },
  overlay: {
    ...basicRoundedButton,
    position: 'absolute',
    top: '21.75%',
    left: '35%',
    zIndex: 1,
  },
});
