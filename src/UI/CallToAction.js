import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import mainBg from "../assets/background.jpg"
import mobileBg from "../assets/mobileBackground.jpg"
import {useMediaQuery} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    learnButtonCustom: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: '2em',
        },
    },
    backGroundImg: {
        backgroundImage: `url(${mainBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '60em',
        width: '100%',
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBg})`,
            backgroundAttachment: 'inherit'
        },
        backgroundAttachment: 'fixed'
    },
    estimateButtonStyle: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 200,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5rem',
        marginLeft: '2em',
        marginRight: '5em',
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginRight: 0,
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
        }
    },
}))
const CallToAction = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchXS = useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <Grid container style={{height: '60em'}} alignItems='center' className={classes.backGroundImg}
              direction={matchSM ? 'column' : 'row'}
              justify={matchSM ? 'center' : 'space-between'}>
            <Grid item style={{marginLeft: matchSM ? 0 : '5em', textAlign: matchSM ? 'center' : "inherit"}}>
                <Grid container>
                    <Grid item>
                        <Typography variant='h2'>
                            Simple Software.<br/> Revolution Result
                        </Typography>
                        <Typography variant='subtitle2' style={{fontSize: '1.5em'}}>
                            Take advantage of 21st century.
                        </Typography>
                        <Grid container item justify={matchSM ? 'center' : undefined}>
                            <Button variant='outlined' className={classes.learnButtonCustom} component={Link}
                                    onClick={() => props.setValue(2)}
                                    to='/estimate'>
                                <span style={{marginRight: 5}}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button variant='contained' className={classes.estimateButtonStyle} onClick={() => props.setValue(5)}>
                    Free Estimate
                </Button>
            </Grid>
        </Grid>
    );
};

export default CallToAction;