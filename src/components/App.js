import React from 'react';
import path from 'path';

import ProductSelector from './ProductSelector';
import OrderList from './OrderList';
import Order from './Order'

class App extends React.Component {
  render(){
    return (
      <div>
        <ProductSelector data={this.props.data}/>
        <OrderList />
        <Order />
      </div>
    )//<Order data={props.data}/>
  }
}

export default App;
