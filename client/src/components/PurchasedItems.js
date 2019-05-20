import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { BrowserRouter as Link } from "react-router-dom";

export default class PurchasedItems extends Component {
  constructor(){
    super()

    this.state = {
      renderedItems: []
    }
  }

    componentDidMount() {
      this.getItems()
    }

    getItems = () => {axios.get('/api/items')
        .then(items => this.setState({ renderedItems: items.data }))
        .catch(err => console.log(err));
    }

    onClick = (e) => {
      axios.delete('/api/items/' + e.target.value)
        .then(res => this.getItems())
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
                    <td><Link to={`/detail/${item._id}`}>Detail</Link></td>
                    <td><Button color="danger" onClick={this.onClick} value={item._id}>Delete</Button></td>
                  </tr>
                ))}
              
              </tbody>
            
        </Table>
      </div>
    )
  }
}
