import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './components/forms/signin';
import Signup from './components/forms/signup';
import { ForgotPassword } from './components/forms/forgotPassword';
import MainLayoutRoutes from './components/mainLoyout';
import { ThankYou } from './components/thankYou';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentSuccess from './page/paymentSuccess/inde';
import PaymentFailed from './page/paymentFailed';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        // transition='Bounce'
      />
      <Routes>
        <Route path='*' element={<MainLayoutRoutes />} />
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/thankYou' element={<ThankYou />}></Route>
        <Route path='/payment-success' element={<PaymentSuccess />}></Route>
        <Route path='/payment-failed' element={<PaymentFailed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
