// App.js
import React from 'react';
import store from './Store/Store';
import ContactListScreen from './screens/ContactListScreen';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ContactListScreen />
    </Provider>
  );
}

export default App;
