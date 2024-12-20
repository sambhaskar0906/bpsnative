import React from 'react';
import AppProviders from './Src/Provider/AppProviders';
import AppNavigator from './Src/Route/AppNavigator ';


const App = () => {
  return (
    <AppProviders>
      <AppNavigator />
    </AppProviders>
  );
};

export default App;
