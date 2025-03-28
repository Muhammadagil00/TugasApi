import { BrowserRouter as Router , Routes , Route } from "react-router";

import Ayat from "./Ayat";
import Doa from "./doa";
import Home from "./Home";
import App from "./App";
import AsmaulHusna from "./Asmaulhusna";


function Routers() { 
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/ayat/:nomorSurah" Component={Ayat}/>
                <Route path="/doa" Component={Doa}/>
                <Route path="/AsmaulHusna" Component= {AsmaulHusna}/>
                <Route path="app"Component= {App}/>
                
            </Routes>
        </Router>
    )
}

export default Routers