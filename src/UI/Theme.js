import {createMuiTheme} from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        },
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "#ffff",
        },
        h2: {
            fontFamily: 'Raleway',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: arcBlue,
            lineHeight: 1.5
        },
        h4: {
            fontFamily: 'Raleway',
            fontSize: '1.7rem',
            color: arcBlue,
            fontWeight: 700,
        },
        subtitle1: {
            fontSize: '1.25rem',
            color: arcGrey,
            fontWeight: 300,
        },
        subtitle2: {
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 300
        },
        learnButton: {
            borderColor: arcBlue,
            color: arcBlue,
            textTransform: 'none',
            borderWidth: 2,
            borderRadius: 50,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            fontSize: '0.9rem',
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            textTransform: "none",
            color: arcBlue,
        }
    },
});
