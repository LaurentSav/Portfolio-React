
import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import MailIcon from '@material-ui/icons/Mail';
import DvrIcon from '@material-ui/icons/Dvr';

const itemLists = [
    {
      text: "Home",
      url:'/',
      icon: <HomeIcon/>
    },
    {
      text: "Compétences",
      url:'/skills',
      icon: <DvrIcon/>
    },
    {
      text: "Projets",
      url:'/projects',
      icon: <ViewModuleIcon/>
    },
    {
      text: "Contact",
      url:'/contact',
      icon: <MailIcon/>
    }
  ]

export {itemLists};