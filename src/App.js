
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
import ManageBooking from './Component/ManageBooking.js/ManageBooking';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import NotFound from './Component/NotFound/NotFound';
import PackageDetails from './Component/PackageDetails/PackageDetails';
import MyBooking from './Component/MyBooking/MyBooking';

function App() {
  return (
    <div>
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


            <PrivateRoute path="/packagedetails/:id">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <PrivateRoute path="/mybooking">
              <MyBooking></MyBooking>
            </PrivateRoute>

            <PrivateRoute path="/managebooking">
              <ManageBooking></ManageBooking>
            </PrivateRoute>

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
