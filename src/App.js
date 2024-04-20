import React, { Component } from "react";
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik"/>
        <List/>
        <Footer name='Makanan Nusantara' tahun='1998'/>
      </div>

    );
  }
}

export default App;
