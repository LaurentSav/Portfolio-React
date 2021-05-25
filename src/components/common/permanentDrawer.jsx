import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'


const drawerWidth = 180;

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
  },
  listitems: {
    textAlign: "center",
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      url:'/'
    },
    {
      text: "A propos de moi",
      url:'/aboutme'
    },
    {
      text: "Compétences",
      url:'/skills'
    },
    {
      text: "Projets",
      url:'/projects'
    },
    {
      text: "Contact",
      url:'/contact'
    }
  ]

  return (

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
          <Link to = {item.url}>
            <ListItem button key={item.text} onClick={item.onClick}>
              <ListItemText className={classes.listitems} primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
    
    
  );
}