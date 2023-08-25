import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import {Provider} from 'react-redux';
import {store} from '../../redux';
import utilities from '../../../tailwind.json';
import {AppNavigator} from '../navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      {/* @ts-ignore */}
      <TailwindProvider utilities={utilities}>
        <AppNavigator />
      </TailwindProvider>
    </Provider>
  );
};

export default App;
