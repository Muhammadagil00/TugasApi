import { BrowserRouter as Router , Routes , Route } from "react-router";

import Ayat from "./Ayat";
import doa from "./doa";
import asmaulhusna from "./asmaulhusna";
import app from "./app";
import Home from "./home";


function Routers() { 
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/ayat/:nomorSurah" Component={Ayat}/>
                <Route path="/doa" Component={doa}/>
                <Route path="/asmaulhusna" Component={asmaulhusna}/>
                <Route path="app" Component={app}/>
                
            </Routes>
        </Router>
    )
}

export default Routers