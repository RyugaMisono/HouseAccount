import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";

export default class PurchasedItems extends Component {
  constructor() {
    super();

    this.state = {
      renderedItems: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/items")
      //.then(res => console.log(res.data))
      //.then(res => this.setState({ todos: res.data }))
      //.then(items => console.log(items.data))
      .then(items => this.setState({ renderedItems: items.data }))
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
            {this.state.renderedItems.map(item => (
              <tr key={item._id}>
                <td>{item.amount}</td>
                <td>{item.type_name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
            {/* <td>{this.state.renderedItems.amount}</td>
              <td>{this.state.renderedItems.type_name}</td>
              <td>{this.state.renderedItems.description}</td> */}
          </tbody>
        </Table>
      </div>
    );
  }
}
