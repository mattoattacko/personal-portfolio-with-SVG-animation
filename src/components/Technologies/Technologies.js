import React from 'react';
import { DiFirebase, DiAtom, DiCodeBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in web development.
      From backend to front, and everything in-between.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAtom size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            {/* Experieced with <br /> */}
            {/* React.js, JavaScript, TypeScript, HTML, S/CSS */}
            Next.js, Gatsby.js, React, Preact, Redux, ReduxJs/toolkit, SWR
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            {/* Experienced with <br /> */}
            {/* NodeJS, Express, Next.js, SEO Optimization, MongoDB, mySQL, Firestore */}
            Node, Express, Sequalize, Passport, aws-sdk, Joi, Faker, GraphQL, PostgresSQL, MySQL, MongoDB, DynamoDB, Neo4j
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodeBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            {/* Experienced with <br /> */}
            Bootstrap, TailwindCSS, Ant Design, Material-UI, Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
