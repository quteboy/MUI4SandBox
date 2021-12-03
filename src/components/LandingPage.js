import React, {Fragment} from 'react';
import Lottie from 'react-lottie'
import {makeStyles, useTheme} from "@material-ui/styles";
import Grid from '@material-ui/core/Grid'
import landingAnimationData from '../assets/animations/landinganimation/data'
import Button from "@material-ui/core/Button";
import ButtonArrow from "../UI/ButtonArrow";
import {Typography} from "@material-ui/core";
import customSoftwareIcon from "../assets/Custom Software Icon.svg"
import {useMediaQuery} from "@material-ui/core";
import Card from '@material-ui/core/Card'
import CardContent from "@material-ui/core/CardContent";
import mobileAppIcon from "../assets/mobileIcon.svg"
import websiteIcon from "../assets/websiteIcon.svg"
import RevoultionBg from '../assets/repeatingBackground.svg'
import infoBg from "../assets/infoBackground.svg"
import CallToAction from "../UI/CallToAction";
import {Link} from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    animation: {
        maxWidth: '50em',
        minWidth: '21em',
        marginTop: '2em',
        marginLeft: '10%',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '30em',
        },
    },
    estimate: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
        }
    },
    buttonContainer: {
        marginTop: '1em'
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        height: 45,
        width: 145,
        fontSize: '0.9rem'
    },
    mainContainer: {
        marginTop: '5em',
        [theme.breakpoints.down("md")]: {
            marginTop: '3em',
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: '2em',
        },
    },
    heroTextContainer: {
        minWidth: '23em',
        marginLeft: '1em',
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    learnButtonCustom: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: '2em',
        },
    },
    subtitle: {
        marginBottom: '1em'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
    },
    serviceContainer: {
        marginTop: '12em',
        [theme.breakpoints.down("sm")]: {
            padding: 25
        },
    },
    revolutionBackground: {
        backgroundImage: `url(${RevoultionBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%'
    },
    revolutionCard: {
        position: 'absolute',
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: '15em',
        [theme.breakpoints.down("sm")]: {
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 0,
            paddingRight: 8,
            borderRadius: 0,
            width: '100%'
        },
    },
    infoBg: {
        backgroundImage: `url(${infoBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%'
    }
}))
const LandingPage = (props) => {
    const classes = useStyle()
    const theme = useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchXS = useMediaQuery(theme.breakpoints.down("xs"))
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: landingAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <Fragment>
            <Grid container direction='column' className={classes.mainContainer}>
                <Grid item> {/*-----Hero Block-----*/}
                    <Grid container justify='flex-end' alignItems='center' direction='row'>
                        <Grid sm item className={classes.heroTextContainer}>
                            <Typography align='center' variant='h2'>
                                Bringing west coast technology <br/> to midwest
                            </Typography>
                            <Grid container justify='center' className={classes.buttonContainer}>
                                <Grid item>
                                    <Button
                                        component={Link}
                                        to='/estimate'
                                        className={classes.estimate}
                                        variant='contained'
                                        onClick={() => props.setValue(5)}
                                    >
                                        Free Estimate
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' className={classes.learnButtonHero} component={Link}
                                            onClick={() => props.setValue(2)}
                                            to='/revolution'>
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm item className={classes.animation}>

                            <Lottie options={defaultOptions} height={'100%'} width={'100%'}/>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item> {/*-----Custom Block-----*/}
                    <Grid container direction='row' justify={matchSM ? 'center' : undefined}
                          className={classes.serviceContainer}>
                        <Grid item style={{marginLeft: matchSM ? 0 : '5em', textAlign: matchSM ? 'center' : undefined}}>
                            <Typography variant='h4'>
                                Custom Software Development
                            </Typography>
                            <Typography variant='subtitle1' className={classes.subtitle}>
                                Save Energy Save Time
                            </Typography>
                            <Typography variant='subtitle1'>
                                Complete digital Solutions from investigation to <span
                                className={classes.specialText}>celebration.</span>
                            </Typography>
                            <Button variant='outlined' className={classes.learnButtonCustom} component={Link}
                                    onClick={() => {
                                        props.setValue(1);
                                        props.setSelectedIndex(1)
                                    }}
                                    to='/customsoftware'>
                                <span style={{marginRight: 10}}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <img className={classes.icon} src={customSoftwareIcon} alt="custom software icon"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item> {/*-----iOS/Android Block-----*/}
                    <Grid container direction='row' justify={matchSM ? 'center' : 'flex-end'}
                          className={classes.serviceContainer}>
                        <Grid item style={{marginLeft: matchSM ? 0 : '5em', textAlign: matchSM ? 'center' : undefined}}>
                            <Typography variant='h4'>
                                iOS/Android Development
                            </Typography>
                            <Typography variant='subtitle1' className={classes.subtitle}>
                                Expand Functionality.Extend Access.Increase Engagement.
                            </Typography>
                            <Typography variant='subtitle1'>
                                Integrate your web experience or create your standalone App{matchSM ? null : <br/>}with
                                either mobile platform
                            </Typography>
                            <Button variant='outlined' className={classes.learnButtonCustom} component={Link}
                                    onClick={() => {
                                        props.setValue(1);
                                        props.setSelectedIndex(2)
                                    }}
                                    to='/mobileapps'>
                                <span style={{marginRight: 10}}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                            </Button>
                        </Grid>
                        <Grid item style={{marginRight: matchSM ? 0 : '5em',}}>
                            <img className={classes.icon} src={mobileAppIcon} alt="mobile app icon"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item> {/*-----Website Block-----*/}
                    <Grid container direction='row' justify={matchSM ? 'center' : undefined}
                          className={classes.serviceContainer}>
                        <Grid item style={{marginLeft: matchSM ? 0 : '5em', textAlign: matchSM ? 'center' : undefined}}>
                            <Typography variant='h4'>
                                Website Development
                            </Typography>
                            <Typography variant='subtitle1' className={classes.subtitle}>
                                Reach more.Discover more.Sell more
                            </Typography>
                            <Typography variant='subtitle1'>
                                Optimized for Search Engines, built for speed
                            </Typography>
                            <Button variant='outlined' className={classes.learnButtonCustom} component={Link}
                                    onClick={() => {
                                        props.setValue(1);
                                        props.setSelectedIndex(3)
                                    }}
                                    to='/website'>
                                <span style={{marginRight: 10}}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <img className={classes.icon} src={websiteIcon} alt="website icon"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item> {/*-----Revolution Block-----*/}
                    <Grid container style={{height: '60em', marginTop: '12em'}} alignItems='center' justify='center'>
                        <Card className={classes.revolutionCard}>
                            <CardContent>
                                <Grid container direction='column' style={{textAlign: 'center'}}>
                                    <Grid item>
                                        <Typography variant='h3' gutterBottom>
                                            The Revolution
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{textAlign: 'center'}}>
                                        <Typography variant='subtitle1'>
                                            Visionary insights coupled with cutting-edge technology is recipe for
                                            revolution.
                                        </Typography>
                                        <Button variant='outlined' className={classes.learnButtonHero} component={Link}
                                                onClick={() => props.setValue(2)}
                                                to='/revolution'>
                                            <span style={{marginRight: 10}}>Learn More</span>
                                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <div className={classes.revolutionBackground}/>
                    </Grid>

                </Grid>
                <Grid item> {/*-----Information Block-----*/}
                    <Grid
                        container
                        style={{height: '65em'}}
                        direction='row'
                        className={classes.infoBg}
                        alignItems='center'>
                        <Grid item container style={{textAlign: matchXS ? "center" : "inherit"}}
                              direction={matchXS ? 'column' : 'row'}>
                            <Grid item style={{marginLeft: matchXS ? 0 : matchSM ? '2em' : '5em'}} sm>
                                <Grid container style={{marginBottom: matchXS ? '10em' : 0}} direction='column'>
                                    <Typography variant='h2' style={{color: '#ffff'}}>
                                        About Us
                                    </Typography>
                                    <Typography variant='subtitle2'>
                                        Let's get personal
                                    </Typography>
                                    <Grid item>
                                        <Button variant='outlined' className={classes.learnButtonCustom}
                                                component={Link}
                                                to='/about'
                                                onClick={() => props.setValue(3)}
                                                style={{color: '#fff', borderColor: '#fff'}}>
                                            <span style={{marginRight: 10}}>Learn More</span>
                                            <ButtonArrow width={10} height={10} fill='white'/>
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item style={{
                                marginRight: matchXS ? 0 : matchSM ? '2em' : '5em',
                                textAlign: matchXS ? "center" : 'right'
                            }} sm>
                                <Grid container direction='column'>
                                    <Typography variant='h2' style={{color: '#ffff'}}>
                                        Contact Us
                                    </Typography>
                                    <Typography variant='subtitle2'>
                                        Say hello !<span role='img' aria-label='emoji icon'>👋</span>
                                    </Typography>
                                    <Grid item>
                                        <Button variant='outlined' className={classes.learnButtonCustom}
                                                component={Link}
                                                to='/contact'
                                                onClick={() => props.setValue(4)}
                                                style={{color: '#fff', borderColor: '#fff'}}>
                                            <span style={{marginRight: 10}}>Learn More</span>
                                            <ButtonArrow width={10} height={10} fill='white'/>
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
                <Grid item> {/*-----Call to action Block-----*/}
                    <CallToAction
                        setValue={props.setValue}
                    />
                </Grid>
            </Grid>

        </Fragment>
    );
};

export default LandingPage;