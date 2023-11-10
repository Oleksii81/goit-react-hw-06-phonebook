import { Section } from './Section/Section';
import { Containers } from './Containers/Container';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { Contacts } from './Contacts/Contacts';
import { NotificationFilter } from './NotificationFilter/NotificationFilter';

export const App = () => {

  return (
    <Section>
      <Containers title={'Phonebook'}>
        <Form />
      </Containers>
      <Containers title={'Filter'}>
        <Filter />
      </Containers>
      <Containers title={'Contacts'}>
         <Notification message="There are no contacts in your list, sorry" />
        <Contacts />
        <NotificationFilter notification="No contacts found that match the filter" />
      </Containers>
    </Section>
  );
};
