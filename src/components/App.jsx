import { Phonebook } from './Phonebook';
import { ContactsList } from './Contacts';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';
import { Filter } from './Filter';

export const App = () => {
 
  return (
    <Container>
      <Phonebook />
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Container>
  );
};
