import phoneBookHero from 'components/icons/phoneBookHero.jpg';
import * as s from './Hero.styled';

export const Hero = () => {
  return (
    <s.Thumb>
      <s.Img loading="lazy" src={phoneBookHero} alt="Phone" />
    </s.Thumb>
  );
};
