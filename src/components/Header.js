import React, { Component } from "react";

class Header extends Component {
//  ini adalah state dan props
  constructor(props) {
    super(props);
    this.state = {
      daftar: 'Daftar Makanan Nusantara',
      dataList: this.props.list
    }
  }

  render() {
    return  (
      <div>
        <h2>Makanan Khas Indonesia</h2>
        <h4>{this.state.daftar}</h4>
        <h5>{this.state.dataList}</h5>
      </div>
    )
  }
}

export default Header;
