import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
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
        .then(items => this.setState({ renderedItems: items.data }))
        .catch(err => console.log(err));
    }

    // // Fetch Items
    // getItems = () => {axios.get('/api/items')
    //     .then(items => this.setState({ renderedItems: items.data }))
    //     .catch(err => console.log(err));
    // }

    // Delete Item
    onClick = (e) => {
      axios.delete('/api/items/' + e.target.value)
        .catch(err => console.log(err))
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
                <th>Detail</th>
                <th>Delete</th>
            </tr>
            </thead>
            
              <tbody>
              
                {this.state.renderedItems.map(item => (
                  <tr key={item._id}>
                    <td>{item.amount} yen</td>
                    <td>{item.type_name}</td>
                    <td>{item.date}</td>
                    <td><Button color="info" href={"/detail" + item.id}>Detail</Button></td>
                    <td><Button color="danger" onClick={this.onClick} value={item._id}>Delete</Button></td>
                  </tr>
                ))}
              
              </tbody>
            
        </Table>
      </div>
    )
  }
}
