import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { RootNavigator } from './navigators/RootNavigator';
import { store } from './store/store';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    async function prepare() {
      try {
        // possible api calls
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hide();
      }
    }
    prepare();
  }, []);
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
