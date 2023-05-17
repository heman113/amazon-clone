import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Orders from './Orders';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51MKbhpSDEV6M61cTDDqcuoQPnnu8WMbej1OGKZyy0INLBN7JUR7YpAYbON46rZBgogptB4bPZzsyRhpQKbhsxMTi00HyC3dzmi");

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=> {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is',authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  },[]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/orders" element={<><Header /><Orders /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;
