import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./components/Nav";
import Detail from "./components/Detail";

function App(){
    return <HashRouter>
        <Nav/>
        <Route path={["/","/detail/:id"]} exact={true} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/detail/:id" component={Detail}/>
    </HashRouter>;
}

export default App;