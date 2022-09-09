import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Notfound from './components/Notfound';
import Header from './components/Header';
import Eventhanding from './components/Eventhanding';
import Todo from './components/Todo';
import Register from './components/Register';
import Product from './components/Product';
import UserManager from './components/UserManager';
import {Toaster} from 'react-hot-toast';
import {AnimatePresence,motion} from 'framer-motion';


function App() {

  return (
    <div >
      <Toaster position ='top-right'/>
      <BrowserRouter>
      <Header />
      <Routes>

        <Route element={ <Home></Home>} path="/" />
        <Route element={ <Home></Home>} path="home" />
        <Route element={ <Login></Login>} path="login" />
        <Route element={ <Todo></Todo>} path="todo" />
        <Route element={ <Register></Register>} path="register" />
        <Route element={ <Eventhanding></Eventhanding>} path="event" />
        <Route element={ <Product></Product>} path="product" />
        <Route element={ <UserManager></UserManager>} path="usermanager" />
        <Route element={ <Notfound></Notfound>} path="*" />
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
