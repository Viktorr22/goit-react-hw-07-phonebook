import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Section, ContactList, Filter } from 'components';
import { selectContacts, selectFilter, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/contactsOperations';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContact = () => {
    if (contacts.length > 0) {
      const lowerFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(lowerFilter)
      );
    }
  };

  return (
    <Section>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>There is no contacts</p>
      ) : (
        <>
          <Filter />
          <ContactList onGetFilteredContact={getFilteredContact} />
        </>
      )}
      {error && <p>{error}</p>}
    </Section>
  );
}
