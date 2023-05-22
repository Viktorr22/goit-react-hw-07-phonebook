import PropTypes from 'prop-types';
import {
  ContactMarkupList,
  ContactMarkupItem,
  ContactMarkupButton,
} from './Contact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { selectIsLoading } from 'redux/selectors';

export const ContactList = ({ onGetFilteredContact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactMarkupList>
      {onGetFilteredContact().map(({ id, name, number }) => (
        <ContactMarkupItem key={id}>
          {name}: {number}
          <ContactMarkupButton
            disabled={isLoading}
            onClick={() => onDeleteContact(id)}
          >
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
