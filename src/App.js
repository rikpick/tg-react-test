import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/useTelegram";
import Header from './components/header/header';
import {Route, Routes} from 'react-router-dom'
import ProductList from './components/productlist/productlist';
import Form from './components/form/form';



function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <Header cartPrice={cartPrice}/>
       <Routes>
         <Route index element = {<ProductList/>}/>
         <Route path={'/form'} element = {<Form/>}/>
       </Routes>
    </div>
  );
}

export default App;
