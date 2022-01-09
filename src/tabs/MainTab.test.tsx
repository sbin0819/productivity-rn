/**
 * @param
 */
import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from '@screens/RootStack';

// Note: test renderer must be required after react-native.

describe('test', () => {
  it('renders Home', async () => {
    const {getByText} = render(
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>,
    );
    await waitFor(() => getByText(/Timer/i));
  });
});
