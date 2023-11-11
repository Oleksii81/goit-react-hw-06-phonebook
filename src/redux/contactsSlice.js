import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from '../initialContacts/initialContacts';

const initialState = {contacts: initialContacts, filter:''};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
      
  
  reducers: {
    add(state, action) {
        state.contacts.unshift(action.payload);
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterValue(state, action) {
        state.filter = action.payload;
      },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { add, remove, filterValue } = contactsSlice.actions;