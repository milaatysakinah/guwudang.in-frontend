import React, { Component } from 'react'
import clsx from 'clsx';
import { AppBar, CssBaseline, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/core/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Colors } from './../../constants/colors';
import { blue } from '@material-ui/core/colors';

const drawerWidth = 360;

        const useStyles = makeStyles((theme) => ({
            root: {
                display: 'flex',
                "& .MuiPaper-root": {
                    backgroundColor: `${Colors.Primary}`
                }
            },
            appBar: {
                zIndex: theme.zIndex.drawer + 1,
                transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen, 
                }),
            },
            appBarShift: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              },
              menuButton: {
                marginRight: 36,
              },
              hide: {
                display: 'none',
              },
              drawer: {
                width: drawerWidth,
                flexShrink: 0,
                whiteSpace: 'nowrap',
              },
              drawerOpen: {
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              },
              drawerClose: {
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: 'hidden',
                width: theme.spacing(7) + 1,
                [theme.breakpoints.up('sm')]: {
                  width: theme.spacing(9) + 1,
                },
              },
              toolbar: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: theme.spacing(0, 1),
                // necessary for content to be below app bar
                ...theme.mixins.toolbar,
              },
              content: {
                flexGrow: 1,
                padding: theme.spacing(3),
              },
        }));

export default function AccountPage() {
    
    const Styles = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

        const openDrawer = () => {
            setOpen(true);
        };

        const closeDrawer = () => {
            setOpen(false);
        };
    
    return (
        <div className={Styles.root}>
            <CssBaseline />
            <AppBar
                style={{backgroundColor: `${Colors.Secondary}`, minWidth: "90vw"}}
                position="fixed"
                className={clsx(Styles.appBar, {
                    [Styles.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Sidebaropen drawer"
                        onClick={openDrawer}
                        edge="start"
                        className={clsx(Styles.menuButton, {
                            [Styles.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap style={{color: `${Colors.fontcolor}`,}}>
                        Guwudang.in Account Page
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                style={{Color: `${Colors.Primary}`}}
                variant="permanent"
                className={clsx(Styles.drawer, {
                    [Styles.drawerOpen]: open,
                    [Styles.drawerClose]: !open,
                })}
                Styles={{paper: clsx({
                    [Styles.drawerOpen]: open,
                    [Styles.drawerClose]: !open,
                }),
              }}
            >
                <div className={Styles.toolbar}>
                    <IconButton onClick={closeDrawer}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                    </div>
                    <Divider />
                    <List>
                    {['Dashboard', 'Inventory', 'Invoice'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </List>
                    <Divider />
                    <List>
                    {['Partners', 'Account'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
        
    )
}