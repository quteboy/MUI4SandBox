import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {}
}))
const Revolution = () => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <Grid direction='column' container>
        <Grid item>
            <Typography variant='h2'>
                The Revolution
            </Typography>
        </Grid>
        </Grid>
    );
};

export default Revolution;