import React, { Component, Container } from 'react'
import { Table } from 'reactstrap';
import axios from 'axios'

export default class PurchasedItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items = []
        }
    }
  render() {
    axios.get('/api/items')
    .then(items => {
        var items = JSON.parse(items);
        items = this.state.items;
    })

    const listItems = this.state.items.map((item) => 
        <tr>
            <td>{item.amount}</td>
            <td>{item.type_name}</td>
            <td>{item.date}</td>
        </tr>
    );
    return (
      <Container>
        
        <Table>
            <thead>
            <tr>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>{listItems}</tbody>
        </Table>
      </Container>
    )
  }
}
