import {createSlice} from '@reduxjs/toolkit';

const initialState = {name: '', email: '', number: ''};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setName: (state, action) => {
      return {...state, name: action.payload};
    },
    setEmail: (state, action) => {
      return {...state, email: action.payload};
    },
    setNumber: (state, action) => {
      return {...state, number: action.payload};
    },
  },
});

export const {setName, setEmail, setNumber} = contactSlice.actions;
export default contactSlice.reducer;
