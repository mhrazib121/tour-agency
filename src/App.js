
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddService from './Component/AddService/AddService';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Services from './Component/Servicees/Services';
import Login from './Component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import MyBooking from './Component/MyBooking/MyBooking';
import ManageBooking from './Component/ManageBooking.js/ManageBooking';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>

            {/* DropDown Manu  */}


            <Route path="/mybooking/:serviceId">
              <MyBooking></MyBooking>
            </Route>

            <Route path="/managebooking">
              <ManageBooking></ManageBooking>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
