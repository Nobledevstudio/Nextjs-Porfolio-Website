import React from 'react'
import {FaLaptopCode,FaShoppingCart,FaWordpress,FaServer,FaTools,FaRocket} from 'react-icons/fa'
import sun_icon from './sun_icon.png'
import moon_icon from './moon_icon.png'
import menu_black from './menu-black.png'
import close_black from './close-black.png'
import hand_icon from './hand-icon.png'
import location from './location.png'
import online_icon from './online-icon.png'
import github from  './github.png'
import figma_icon from './figma_icon.png'
import figma from './figma.png'
import X_icon from './X_icon.png'
import my_image from './my_image.png'
import user_image1 from './user-image1.png'
import code_icon from './code-icon.png'
import code_icon_dark from './code-icon-dark.png'
import edu_icon from './edu-icon.png'
import edu_icon_dark from './edu-icon-dark.png'
import project_icon from './project-icon.png'
import project_icon_dark from './project-icon-dark.png'
import vscode from './vscode.png'
import firebase from './firebase.png'
import mongodb from './mongodb.png'
import git from './git.png'
import graphics from './graphics.png'
import webdev from './webdev.jpg'
import webmain from './webmain.jpg'
import sendicon from './sendicon.png'
import work1 from './work-1.png'
import work2 from './work-2.png'
import work3 from './work-3.png'
import work4 from './work-4.png'
import right_arrow_bold from './right-arrow-bold.png'
import home_icon from './home_icon.png'
import email_icon from './email_icon.png'
import phone_call_icon from './phone_call_icon.png'
import responsive from './responsive.png'
import react_nextjs_image from './react_nextjs_image.png'
import ui_ux_design from './ui_ux_design.jpg'
import seo from './seo.jpg'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import express from './express.svg'
import javascript from './javascript.png'
import typescript from './typescript.png'
import react from './react.png'
import next from './next.png'
import node from './node.png'
import tailwind from './tailwind.png'
import boostrap from './boostrap.png'
import wordpress from './wordpress.png'
import jest from './jest.png'
import docker from './docker.png'






export const assets = {
    sun_icon,
    moon_icon,
    menu_black,
    close_black,
    hand_icon,
    location,
    online_icon,
    github,
    figma_icon,
    X_icon,
    my_image,
    user_image1,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    mongodb,
    git,
    figma,
    webdev,
    webmain,
    graphics,
    sendicon,
    right_arrow_bold,
    home_icon,
    email_icon,
    phone_call_icon,
    responsive,
    react_nextjs_image,
    ui_ux_design,
    seo,
    linkedin,
    instagram,
    express,
    javascript,
    typescript,
    react,
    next,
    node,
    tailwind,
    boostrap,
    wordpress,
    jest,
    docker
    
} 

export const infoList = [
    {
        icon: assets.code_icon, iconDark: assets.code_icon_dark,
        title: 'Languages', description: 'HTML,CSS,JavaScript, React Js,Next Js'
    },
    {
        icon: assets.edu_icon, iconDark: assets.edu_icon_dark,
        title: 'Education', description: 'B.Tech In Industrial Mathematics'
    },
    {
        icon: assets.project_icon, iconDark: assets.project_icon_dark,
        title: 'Projects', description: 'Built More than 5 Projects'
    }
]

export const toolsData = [
      assets.firebase,assets.git,assets.mongodb,assets.vscode,assets.figma,assets.express,assets.javascript,assets.typescript,
       assets.react,assets.next,assets.node,assets.tailwind,assets.boostrap,assets.wordpress,assets.jest,assets.docker
   
];

export const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: 'Web Application Development',
    description:
      'Building fast, scalable, and user-focused web applications that solve real business problems.'
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce Solutions',
    description:
      'Creating conversion-focused online stores that provide smooth shopping experiences.'
  },
  {
    icon: <FaWordpress />,
    title: 'WordPress Development',
    description:
      'Custom WordPress websites that are easy to manage, responsive, and business-ready.'
  },
  {
    icon: <FaServer />,
    title: 'Backend & API Integration',
    description:
      'Secure backend systems and APIs that power modern, data-driven applications.'
  },
  {
    icon: <FaTools />,
    title: 'Website Optimization',
    description:
      'Improving speed, performance, and accessibility for better user engagement.'
  },
  {
    icon: <FaRocket />,
    title: 'Deployment & Maintenance',
    description:
      'Reliable deployment, updates, and long-term maintenance for production-ready sites.'
  }
]

export const WorkData = [
  {
    title: 'The BBQ place',
    description: 'Responsive BBQ website with menus and contact info.',
    bgImage: work1,
    url: "https://nobledevstudio.github.io/Barbecue-Website/"
  },
  {
    title: 'Ecommerce Website',
    description: 'Responsive ecommerce website with product listings',
    bgImage: work2,
    url: "https://gadgetkingstore.netlify.app/"
  },
  {
     title: 'EduStage – React.js',
    description: 'Interactive educational platform with responsive UI.',
  
    bgImage: work3,
    url: "https://nobledevstudio.github.io/Edustage-ReactJs/"
  },
  {
    title: 'SwiftCargo Logistics',
    description: 'Clean landing page for a logistics company',
    bgImage: work4,
    url: "https://nobledevstudio.github.io/SwiftCargo-Landing-Page/"
  }
]
