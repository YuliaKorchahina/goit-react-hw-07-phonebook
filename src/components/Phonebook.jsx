import { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { FormField, Form, ErrorMessage } from './FormStyle.styled';

import { addContact } from 'redux/operations';
import { fetchContacts } from 'redux/operations';

const initialValues = {
  name: '',
  number: '',
};

export const Phonebook = () => {
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = (newContact, actions) => {
    const action = addContact(newContact);
    dispatch(action);
    actions.resetForm();
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Formik initialValues={initialValues} onSubmit={onAddContact}>
        <Form>
          <FormField>
            Name
            <Field
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="span" />
          </FormField>
          <FormField>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormField>
          <button type="submit">Add contact ✅</button>
        </Form>
      </Formik>
    </>
  );
};

Phonebook.propTypes = {
  isDublicate: PropTypes.func,
  onAddContact: PropTypes.func,
};
