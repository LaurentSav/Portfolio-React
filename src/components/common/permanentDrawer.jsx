import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'
import {itemLists} from '../../routes/routes'
import { ListItemIcon, ThemeProvider } from '@material-ui/core';
import theme from './theme';

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
    background: "#0f1419", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: drawerWidth,
    color: "white"
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
    fontSize: "2rem"
    
  },

  link: {
    padding: 10,
    textDecoration: "none",
    color: "inherit",
    height: 100,


    "&:hover":{
      "& $listitemsText":{
        display: "inline-block",
        
      },
      "& $listitemsIcon":{
        display: "none"
      },

    }
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const itemsList = itemLists;

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List className={classes.list}>
          {itemsList.map((item, index) => (
            <Link to = {item.url} className={classes.link}>
              <ListItem button key={item.text} onClick={item.onClick}>
                <ListItemIcon className={classes.listitemsIcon }>{item.icon}</ListItemIcon>
                <ListItemText className={classes.listitemsText} primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
    
  );
}