import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [deleteContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.error = null;
      const index = store.items.findIndex(contact => contact.id === payload.id);
      store.items.splice(index, 1);
      // store.items = store.items.filter(contact => contact.id !== payload)
    },
    [deleteContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
