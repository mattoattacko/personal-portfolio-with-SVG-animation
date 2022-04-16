import Link from 'next/link';
import React from 'react';
import { AiFillGithub,  AiFillLinkedin } from 'react-icons/ai';
import { SiUpwork } from "react-icons/si";

import { GiWaveSurfer } from "react-icons/gi";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white",  marginBottom: '20px' }}>
          <GiWaveSurfer size="3rem" /> <Span>Hello There</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/mattoattacko">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/matthew-mcquain/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.upwork.com/freelancers/~01f6206ecf6bf14e26">
          <SiUpwork size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
