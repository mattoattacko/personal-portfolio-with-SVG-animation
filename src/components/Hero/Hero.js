import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Aloha & Welcome <br />
        to Matthew's Portfolio
      </SectionTitle>
      <SectionText>
        Full-Stack JavaScript Developer, Certified Strength & Conditioning Specialist, Beach Aficionado. 
      </SectionText>
      <Button onClick={() => window.location = 'https://westcoastcreatives.net'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;