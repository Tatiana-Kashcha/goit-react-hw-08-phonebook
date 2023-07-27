import { Section } from 'components/Section/Section';
import phoneBookHero from 'components/icons/phoneBookHero.jpg';

export default function Home() {
  return (
    <Section>
      <div>
        <img loading="lazy" src={phoneBookHero} alt="Phone" />
      </div>
    </Section>
  );
}
