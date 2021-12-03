import React from 'react';
import {Link} from 'react-router-dom'
import {makeStyles} from "@material-ui/styles";
import footerImg from '../assets/Footer Adornment.svg'
import {useTheme} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import fbImg from "../assets/facebook.svg";
import instaImg from "../assets/instagram.svg";
import twitImg from "../assets/twitter.svg"

const useStyle = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down("md")]: {
            width: '21em'
        },
        [theme.breakpoints.down("xs")]: {
            width: '15em'
        },
    },
    mainContainer: {
        position: 'absolute',
    },
    link: {
        color: 'white',
        fontSize: '.75rem',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '3.5em'
    },
    icon: {
        height: '3.5em',
        width: '3.5em',
        [theme.breakpoints.down("md")]: {
            height: '2.5em',
            width: '2.5em',
        },
        [theme.breakpoints.down("xs")]: {
            height: '2em',
            width: '2em',
        },
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5em',
        [theme.breakpoints.down("md")]: {
            right: '1em',
        },
        [theme.breakpoints.down("xs")]: {
            right: '0.6em',
        },
    }
}))
const Footer = (props) => {
    const classes = useStyle()
    const theme = useTheme()
    return (

        <footer className={classes.footer}>
            <Hidden mdDown>


                <Grid justify='center' container className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.link} onClick={() => {
                                props.setValue(0);
                                props.setSelectedIndex(0)
                            }} component={Link} to="/">
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.link} onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(1)
                            }} component={Link}
                                  to="/services">
                                Services
                            </Grid>
                            <Grid item className={classes.link} onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(2)
                            }} component={Link}
                                  to="/customsoftware">
                                Custom Software Development
                            </Grid>
                            <Grid item className={classes.link} onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(3)
                            }} component={Link}
                                  to="/mobileapps">
                                Mobile App development
                            </Grid>
                            <Grid item className={classes.link} onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(4)
                            }} component={Link}
                                  to="/website">
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.link} onClick={() => {
                                props.setValue(2)
                            }} component={Link}
                                  to="/revolution">
                                The Revolution
                            </Grid>
                            <Grid item className={classes.link} onClick={() => props.setValue(2)} component={Link}
                                  to="/revolution">
                                The Vision
                            </Grid>
                            <Grid item className={classes.link} onClick={() => props.setValue(2)} component={Link}
                                  to="/revolution">
                                Technology
                            </Grid>
                            <Grid item className={classes.link} onClick={() => props.setValue(2)} component={Link}
                                  to="/revolution">
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.link} onClick={() => props.setValue(3)} component={Link}
                                  to="/about">
                                About Us
                            </Grid>
                            <Grid item className={classes.link} onClick={() => props.setValue(3)} component={Link}
                                  to="/about">
                                History
                            </Grid>
                            <Grid item className={classes.link} onClick={() => props.setValue(3)} component={Link}
                                  to="/about">
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.link} onClick={() => props.setValue(4)} component={Link}
                                  to="/contact">
                                Contact Us
                            </Grid>
                            {/*<Grid item className={classes.link}>*/}
                            {/*    History*/}
                            {/*</Grid>*/}
                            {/*<Grid item className={classes.link}>*/}
                            {/*    Team*/}
                            {/*</Grid>*/}
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img src={footerImg} className={classes.adornment} alt='adorable footer'/>
            <Grid container spacing={2} justify='flex-end' className={classes.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferer" target='_blank'>
                    <img src={fbImg} alt='fb-footer' className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferer" target='_blank'>
                    <img src={twitImg} alt='fb-footer' className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferer" target='_blank'>
                    <img src={instaImg} alt='fb-footer' className={classes.icon}/>
                </Grid>

            </Grid>
        </footer>

    );
};

export default Footer;