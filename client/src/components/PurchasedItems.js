import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

export default class PurchasedItems extends Component {

    onClick = () => {
      axios.get('/api/items')
        .then(items => this.listItems(items))
        .catch(err => console.log(err));
    }

    listItems = () => {
      this.state.items.map((item) => {
        return (
          <tr>
            <td>{item.amount}</td>
            <td>{item.type_name}</td>
            <td>{item.date}</td>
        </tr>
        )
      }
    )};

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Button</button>
        <Table>
            <thead>
            <tr>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
            </tr>
            </thead>
        </Table>
      </div>
    )
  }
}
