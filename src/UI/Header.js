import React, {useState, useEffect, Fragment} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Logo from "../assets/logo.svg";
import {useMediaQuery} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import {useTheme} from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: '2em'
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: '1.25em'
        },
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: '7em'
        },
        [theme.breakpoints.down("sm")]: {
            height: '5.5em'
        },
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "25px",
        marginRight: "50px",

        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px",
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1,
        },
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    drawerIcon: {
        height: '50px',
        width: '50px'
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: '#ffff',
        opacity: 0.7
    },
    drawerItemSelected: {
        opacity: 1,
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    }
}));

function ElevationScroll(props) {
    const {children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleChange = (e, newValue) => {
        props.setValue(newValue);
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    };
    const handleMenuClick = (e, i) => {
        setAnchorEl(null);
        setOpen(false);
        props.setSelectedIndex(i);
    };
    const menuOption = [
        {name: "Services", link: "/services"},
        {name: "Custom Software Development", link: "/customsoftware"},
        {name: "Mobile App Development", link: "/mobileapps"},
        {name: "Web Development", link: "/websites"},
    ];
    useEffect(() => {
        if (window.location.pathname === "/" && props.value !== 0) {
            props.setValue(0);
        } else if (window.location.pathname === "/services" && props.value !== 1) {
            props.setValue(1);
        } else if (window.location.pathname === "/revolution" && props.value !== 2) {
            props.setValue(2);
        } else if (window.location.pathname === "/about" && props.value !== 3) {
            props.setValue(3);
        } else if (window.location.pathname === "/contact" && props.value !== 4) {
            props.setValue(4);
        } else if (window.location.pathname === "/estimate" && props.value !== 5) {
            props.setValue(5);
        }
        switch (window.location.pathname) {
            case "/":
                if (props.value !== 0) {
                    props.setValue(0);
                }
                break;
            case "/services":
                if (props.value !== 1) {
                    props.setValue(1);
                    props.setSelectedIndex(0);
                }
                break;
            case "/customsoftware":
                if (props.value !== 1) {
                    props.setValue(1);
                    props.setSelectedIndex(1);
                }
                break;
            case "/mobileapps":
                if (props.value !== 1) {
                    props.setValue(1);
                    props.setSelectedIndex(2);
                }
                break;
            case "/websites":
                if (props.value !== 1) {
                    props.setValue(1);
                    props.setSelectedIndex(3);
                }
                break;
            case "/revolution":
                if (props.value !== 2) {
                    props.setValue(2);
                }
                break;
            case "/about":
                if (props.value !== 3) {
                    props.setValue(3);
                }
                break;
            case "/contact":
                if (props.value !== 4) {
                    props.setValue(4);
                }
                break;
            case "/estimate":
                if (props.value !== 5) {
                    props.setValue(5);
                }
                break;
            default:
                break;
        }
    }, [props.value]);
    const tabs = (
        <Fragment>
            <Tabs
                value={props.value}
                onChange={handleChange}
                indicatorColor="primary"
                className={classes.tabContainer}
            >
                <Tab
                    className={classes.tab}
                    label="Home"
                    component={Link}
                    to="/"
                />
                <Tab
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup={anchorEl ? true : undefined}
                    className={classes.tab}
                    label="Services"
                    component={Link}
                    onMouseOver={(event) => handleClick(event)}
                    to="/services"
                />

                <Tab
                    className={classes.tab}
                    label="The Revolution"
                    component={Link}
                    to="revolution"
                />
                <Tab
                    className={classes.tab}
                    label="About Us"
                    component={Link}
                    to="/about"
                />
                <Tab
                    className={classes.tab}
                    label="Contact US"
                    component={Link}
                    to="contact"
                />
            </Tabs>
            <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                component={Link}
                to='/estimate'
                onClick={() => props.setValue(5)}
            >
                Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                classes={{paper: classes.menu}}
                MenuListProps={{onMouseLeave: handleClose}}
                elevation={0}
            >
                {menuOption.map((option, i) => (
                    <MenuItem
                        key={option}
                        component={Link}
                        to={option.link}
                        classes={{root: classes.menuItem}}
                        onClick={(event) => {
                            handleMenuClick(event, i);
                            props.setValue(1);
                            handleClose();
                        }}
                        selected={i === props.setSelectedIndex && props.value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    )
    const drawer = (
        <Fragment>
            <SwipeableDrawer classes={{paper: classes.drawer}} disableBackdropTransition={!iOS} disableDiscovery={iOS}
                             open={openDrawer}
                             onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
            >
                <List disablePadding>
                    <ListItem divider button component={Link} to='/' onClick={() => {
                        setOpenDrawer(false);
                        props.setValue(0)
                    }} selected={props.value === 0}>
                        <ListItemText
                            className={props.value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to='/services' onClick={() => {
                        setOpenDrawer(false);
                        props.setValue(1)
                    }} selected={props.value === 1}>
                        <ListItemText
                            className={props.value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography>Services</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to='/revolution' onClick={() => {
                        setOpenDrawer(false);
                        props.setValue(2)
                    }} selected={props.value === 2}>
                        <ListItemText
                            className={props.value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography>The Revolution</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to='/about' onClick={() => {
                        setOpenDrawer(false);
                        props.setValue(3)
                    }} selected={props.value === 3}>
                        <ListItemText
                            className={props.value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography>About Us</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to='/contact' onClick={() => {
                        setOpenDrawer(false);
                        props.setValue(4)
                    }} selected={props.value === 4}>
                        <ListItemText
                            className={props.value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography>Contact</ListItemText>
                    </ListItem>
                    <ListItem className={classes.drawerItemEstimate} divider button component={Link} to='/estimate'
                              onClick={() => {
                                  setOpenDrawer(false);
                                  props.setValue(5)
                              }} selected={props.value === 5}>
                        <ListItemText
                            className={props.value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>

            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)}
                        disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </Fragment>
    )
    return (
        <>
            <ElevationScroll>
                <AppBar position={"fixed"} className={classes.root}>
                    <Toolbar disableGutters>
                        <Button
                            className={classes.logoContainer}
                            component={Link}
                            onClick={() => props.setValue(0)}
                            to="/"
                            disableRipple
                        >
                            <img src={Logo} className={classes.logo}/>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin}/>
        </>
    );
}
