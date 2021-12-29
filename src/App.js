
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Components/Pages/Explore/Explore';
import Footer from './Components/Pages/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import NotFound from './Components/Pages/NotFound/NotFound';
import Purchase from './Components/Pages/Purchase/Purchase';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MainNav from './Components/Shared/MainNav/MainNav';
import AuthProvider from './Context/AuthProvider/AuthProvider';

function App() {
  AOS.init();

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/explore'>
              <MainNav></MainNav>
              <Explore></Explore>
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <MainNav></MainNav>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <MainNav></MainNav>
              <Register></Register>
            </Route>
            <PrivateRoute path="/service/:_id">
              <MainNav></MainNav>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
