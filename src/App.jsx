import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import img from './assets/squid-game.png';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header img={img}/>
      </BrowserRouter>
    </div>
  );
}
