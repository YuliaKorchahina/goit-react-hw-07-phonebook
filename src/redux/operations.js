import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { selectState } from './contactsBook/contacts/contacts-selector';
axios.defaults.baseURL = 'https://642ec11f2b883abc641621b6.mockapi.io/api/v13';

// const isDublicate = (contacts, newContact) => {
//   return contacts.some(data => data.name === newContact.name);
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    const responce = await axios.post('/contacts', { name, number });
    console.log('response', responce.data);
    return responce.data;
  }
  // {
  //   condition: (info, {getState}) => {
  //     const { contacts } = getState();
  //     if (isDublicate(info, contacts.items)) {
  //       alert(`${info.name} is already in contacts 👀`);
  //       return false;
  //     }
  //   },
  // }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${id}`);
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
