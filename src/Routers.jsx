import { BrowserRouter as Router , Routes , Route } from "react-router";

import Ayat from "./Ayat";
import Doa from "./doa";
import AsmaulHusna from "./AsmaulHusna";
import Home from "./home";
import App from "./App";


function Routers() { 
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/ayat/:nomorSurah" Component={Ayat}/>
                <Route path="/doa" Component={Doa}/>
                <Route path="/AsmaulHusna" Component={AsmaulHusna}/>
                <Route path="app"Component= {App}/>
                
            </Routes>
        </Router>
    )
}

export default Routers