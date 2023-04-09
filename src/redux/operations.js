import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://642ec11f2b883abc641621b6.mockapi.io/api/v13';

const isDublicate = (contacts, newContact) => {
  return contacts.some(data => data.name === newContact.name);
};

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
try{
  const responce = await axios.post('/contacts', { name, number });
  console.log('response', responce.data);
  toast(`'${name} ${number}' the contact is added to the list🎉`)
  return responce.data;
} catch (e) {
  return thunkAPI.rejectWithValue(e.message);
}
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      console.log(contacts.name);
      if (isDublicate(contacts.items, data)) {
        toast(`'${data.name}' is already in contacts 👀`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${id}`);
      toast(`Сontact has been deleted ❌`);
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
