import "./App.css";
import TopNav from "./navigation/topNav/TopNav";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomNav from "./navigation/bottomNav/BottomNav";
import Activity from "./pages/activity/Activity";
import Earn from "./pages/earn/Earn";
import Market from "./pages/market/Market";
import Wallet from "./pages/wallet/Wallet";

function App() {
  return (
    <div className='bg-dark'>
      <div className='App'>
        <Router>
          <TopNav />
          <Route path='/' exact component={Home} />
          <Switch>
            <Route exact path='/activity' component={Activity} />
            <Route exact path='/earn' component={Earn} />
            <Route exact path='/market' component={Market} />
            <Route exact path='/wallet' component={Wallet} />
          </Switch>
          <BottomNav />
        </Router>
      </div>
    </div>
  );
}

export default App;
