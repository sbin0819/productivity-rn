import React from 'react';

import {QueryClient, QueryClientProvider} from 'react-query';

import {Provider} from 'react-redux';
import {store} from './slices/store';

import RootStack from '@screens/RootStack';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
