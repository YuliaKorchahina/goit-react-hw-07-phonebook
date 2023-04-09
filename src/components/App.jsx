import { Phonebook } from './Phonebook';
import { ContactsList } from './Contacts';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';
import { Filter } from './Filter';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <Container>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
          style: {
            background: '#F33A6A',
            color: '#000',
          },
        }}
      />
      <Phonebook />
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Container>
  );
};
