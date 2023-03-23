import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: 148,
    paddingHorizontal: 15,
    paddingBottom: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginBottom: 6,
    backgroundColor: '#6871EE',
  },
  addTaskContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 28,
    justifyContent: 'space-between',
  },
  invitationText: {
    paddingTop: 8,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    opacity: 0.75,
  },
  mainText: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
