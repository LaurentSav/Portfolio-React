import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'
import {itemLists} from '../../routes/routes'
import { ListItemIcon } from '@material-ui/core';
import clsx from 'clsx';
import { COLORS } from './colors';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    background: COLORS.primaryBC, /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: drawerWidth,
    color: "white",
    
  },
  list: {
    margin: "auto",
    width: "100%",
    
    
  },
  listitemsIcon: {
    margin: "auto",
    display: "bloc",
    textAlign: "center",
    color: "white",
    justifyContent: 'center',

  },
  listitemsText: {
    margin: "auto",
    display: "none",
    textAlign: "center",
    color: "white",
    
  },

  link: {
    padding: 5,
    textDecoration: "none",
    color: "inherit",

    "&:hover":{
      "& $listitemsText":{
        display: "inline-block",
        
      },
      "& $listitemsIcon":{
        display: "none"
      },

    }
  },
  pSize:{
    margin: 0,
    padding: 10,
    fontSize: "1.20rem",
    transition: "all .2s ease-in-out",

    "&:hover":{
      transform: "scale(1.2)"
    }
    
  },

  noPadding:{
    padding: 0
  }
  

}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const itemsList = itemLists;

  return (
  
    <Drawer
      className= {clsx(classes.drawer)}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <List className={classes.list}>
        {itemsList.map((item, index) => (
          <Link to = {item.url} className={classes.link}>
            <ListItem className={clsx(classes.noPadding)} button key={item.text} onClick={item.onClick}>
              <ListItemIcon className={clsx(classes.listitemsIcon)}>{item.icon}</ListItemIcon>
              <ListItemText className={clsx(classes.listitemsText)}><p className={classes.pSize}>{item.text}</p></ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
    
  );
}