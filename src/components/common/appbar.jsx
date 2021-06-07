import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'
import {itemLists} from '../../routes/routes'
import { COLORS } from './colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
      background: COLORS.primaryBC
  },
  drawerPaper: {
    width: 'calc(60%)',
    background: COLORS.primaryBC, /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: "white"
  },
  list: {
    margin: "auto",
    
  },
  listitems: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    height: 100,
  },

  pBig: {
    fontsize: "2rem"
  }
}));




export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const itemsList = itemLists;

  return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
                <p>Laurent SAVIVANH</p>
            </Toolbar>
        </AppBar>

        <Hidden>

            <Drawer
            className={classes.drawer}
            variant="temporary"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            >
                <List className={classes.list}>
                    {itemsList.map((item, index) => (
                    <Link to = {item.url} className={classes.link}>
                        <ListItem button key={item.text} onClick={item.onClick}>
                          <ListItemText className={classes.listitems}><p style={{fontSize: "1.4rem"}}>{item.text}</p></ListItemText>
                        </ListItem>
                    </Link>
                    ))}
                </List>
            </Drawer>

        </Hidden>
    </div>
  );
}