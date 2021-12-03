import React, {useState} from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import theme from "./UI/Theme";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import {CssBaseline} from "@material-ui/core";
import LandingPage from "./components/LandingPage";
import Revolution from "./components/Revolution";

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Header value={value} setValue={setValue} selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) =>
                            <LandingPage
                                {...props}
                                setValue={setValue}
                                setSelectedIndex={setSelectedIndex}
                            />}
                    />
                    <Route exact path="/services" component={() => <div>Services</div>}/>
                    <Route
                        exact
                        path="/customsoftware"
                        component={() => <div>Custom</div>}
                    />
                    <Route exact path="/mobileapps" component={() => <div>Mobile</div>}/>
                    <Route exact path="/website" component={() => <div>Website</div>}/>
                    <Route
                        exact
                        path="/revolution"
                        component={Revolution}
                    />
                    <Route exact path="/about" component={() => <div>About Us</div>}/>
                    <Route exact path="/contact" component={() => <div>Contact</div>}/>
                    <Route exact path="/estimate" component={() => <div>Estimate</div>}/>
                </Switch>
                <Footer value={value} setValue={setValue} selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
