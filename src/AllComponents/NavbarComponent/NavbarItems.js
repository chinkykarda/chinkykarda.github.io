import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const NavbarItems = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <FaIcons.FaPencilAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <FaIcons.FaLandmark />,
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '/education',
    icon: <FaIcons.FaGraduationCap />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FaIcons.FaBook />,
    cName: 'nav-text'
  },
  {
    title: 'Publications',
    path: '/publications',
    icon: <FaIcons.FaCopy />,
    cName: 'nav-text'
  },
];