// store/store.js
import {configureStore} from '@reduxjs/toolkit';
import contactsReducer from '../Slices/contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
