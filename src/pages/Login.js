import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Section } from 'components/Section/Section';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Section title="Please login">
        <LoginForm />
      </Section>
    </>
  );
}
