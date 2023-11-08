import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Containers } from './Containers/Container';
import Form from './Form/Form';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { Contacts } from './Contacts/Contacts';
import { NotificationFilter } from './NotificationFilter/NotificationFilter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

    useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmitData = ({ name, number }) => {
    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      alert(`${name} or entered number is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const filteredContacts = () => {
    const filterValue = filter.toLowerCase().trim();

    return contacts.filter((contact) => contact.name.toLowerCase().trim().includes(filterValue));
  };

  const onFilterChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts =>
      prevContacts.filter((contact) => contact.id !== contactId));
  };

  const onLengthCheck = () => {
    return contacts.length;
  };

  return (
    <Section>
      <Containers title={'Phonebook'}>
        <Form onChange={onFormSubmitData} />
      </Containers>
      <Containers title={'Filter'}>
        <Filter filter={filter} onFilterChange={onFilterChange} />
      </Containers>
      <Containers title={'Contacts'}>
        {onLengthCheck() === 0 && <Notification message="There are no contacts in your list, sorry" />}
        {onLengthCheck() > 0 && filteredContacts().length > 0 && (
        <Contacts contacts={filteredContacts()} deleteContact={deleteContact} />
        )}
        {onLengthCheck() > 0 && filteredContacts().length === 0 && (
        <NotificationFilter notification="No contacts found that match the filter" />
        )}
      </Containers>

    </Section>
  );
};
