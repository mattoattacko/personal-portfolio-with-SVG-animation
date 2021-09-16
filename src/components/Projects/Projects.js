import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((projects, i) => {
        return (
          <BlogCard key={i}>
          <Img src={projects.image} />
            <TitleContent>
              <HeaderThree title>{projects.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{projects.description}</CardInfo>
            <div>
              <br />
              <TitleContent>Stack</TitleContent>
              <TagList>
                {projects.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {/* <ExternalLinks href={projects.visit}>Code</ExternalLinks> */}
              <ExternalLinks href={projects.source}>View Project</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;