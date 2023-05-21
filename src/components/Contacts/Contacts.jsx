import PropTypes from 'prop-types';
import {
  ContactMarkupList,
  ContactMarkupItem,
  ContactMarkupButton,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';

export const ContactList = ({ onGetFilteredContact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactMarkupList>
      {onGetFilteredContact().map(({ id, name, number }) => (
        <ContactMarkupItem key={id}>
          {name}: {number}
          <ContactMarkupButton onClick={() => onDeleteContact(id)}>
            Delete
          </ContactMarkupButton>
        </ContactMarkupItem>
      ))}
    </ContactMarkupList>
  );
};

ContactList.propTypes = {
  onGetFilteredContact: PropTypes.func.isRequired,
};
