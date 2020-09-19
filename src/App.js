import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import SubMenus from "./pages/SubMenus";

export default function App() {
    return (
        <Router>
            <TopBar />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" >
                    <Home />
                </Route>
                <Route path="/sub-menus" >
                    <SubMenus />
                </Route>
            </Switch>
        </Router>
    );
}