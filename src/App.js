import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import LeagueDetails from "./Components/LeagueDetails/LeagueDetails";
import NotFound from "./Components/NotFound/NotFound";


function App() {
  return (
    <Routes >
    
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} />
  
    <Route path="/leagueDetails/:leagueID" element={<LeagueDetails />} />
     
    {/* <Route path="/CountryDetails/:CountryName" element={<CountryDetails />} /> */}
    <Route path="*" element={<NotFound />} />



  </Routes>
  );
}

export default App;
