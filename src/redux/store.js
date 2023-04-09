import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsBook/contacts/contacts-slice';
import { filterReducer } from './contactsBook/filter/filter-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
