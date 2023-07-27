import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {
  selectUsersQuantity,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Section } from 'components/Section/Section';

export default function Contacts() {
  const usersQuantity = useSelector(selectUsersQuantity);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Section title="Add new contact">
        <ContactForm />
      </Section>
      {isLoading && !error && Loading.arrows()}
      {!isLoading && Loading.remove()}
      {usersQuantity > 0 && (
        <Section title="Your contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </>
  );
}
