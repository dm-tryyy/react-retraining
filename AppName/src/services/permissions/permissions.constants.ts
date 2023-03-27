import { PERMISSIONS } from 'react-native-permissions';
import { Platform } from 'react-native';

export const CAMERA_PERMISSION = Platform.select({
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
});
