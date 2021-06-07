
import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import MailIcon from '@material-ui/icons/Mail';
import DvrIcon from '@material-ui/icons/Dvr';
import Routes from '../pages/routes';

const itemLists = [
    {
      text: "Home",
      url:'/',
      icon: <HomeIcon style={{fontSize: "2rem", padding: 10}}/>
    },
    {
      text: "Skills",
      url:'/skills',
      icon: <DvrIcon style={{fontSize: "2rem", padding: 10}}/>
    },
    {
      text: "Projects",
      url:'/projects',
      icon: <ViewModuleIcon style={{fontSize: "2rem", padding: 10}}/>
    },
    {
      text: "Contact Me!",
      url:'/contact',
      icon: <MailIcon style={{fontSize: "2rem", padding: 10}}/>
    }
  ]

export {itemLists, Routes};