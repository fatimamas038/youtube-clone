import React from "react"
import Header from "./Header"
import SideBar from "./SideBar"
import RecomVideos from "./RecomVideos"
import "./App.css";
import SearchPage from "./SearchPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <div className="App">
   <Router>
   <Header />
   <Switch>

   <Route path="/search/:searchTerm">
   <div className="app__page">
   <SideBar />
 <SearchPage />
   </div>
   
   </Route>

     <Route path="/">
     <div className="app__page">
       <SideBar />
       <RecomVideos />
       </div>
     </Route>
   </Switch>
   </Router>
   </div>
  
      
   

    //  {/* header
    //  sidebar
    //  recommended video */}
   
  );
}

export default App;
