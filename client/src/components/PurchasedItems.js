import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

export default class PurchasedItems extends Component {
  constructor(){
    super()

    this.state = {
      renderedItems: []
    }
  }

    componentDidMount() {
      axios.get('/api/items')
        .then(items => this.setState({ renderedItems: items }))
        .catch(err => console.log(err));
    }

  render() {
    return (
      <div>
        <Table>
            <thead>
            <tr>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
            </tr>
            </thead>
            
              <tbody>
              <tr>
                <td>{this.state.renderedItems.amount}</td>
                <td>{this.state.renderedItems.type_name}</td>
                <td>{this.state.renderedItems.description}</td>
              </tr>
              </tbody>
            
        </Table>
      </div>
    )
  }
}
