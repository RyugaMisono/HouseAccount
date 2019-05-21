import React from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    FormFeedback,
    FormText,
    Label,
    Input,
 } from 'reactstrap';
 import axios from 'axios'

export default class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      valid: false,
      invalid: false,
      disabled: false,
      amount: this.props.item.amount,
      type_name: this.props.item.type_name,
      description: this.props.item.description,
      id: this.props.item._id
    };

    this.onChange = this.onChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Toggle modal
  toggle(){
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // Change value
  onChange(e){
      const { name, value } = e.target;
      if(e){
      this.setState({
          [name]: value
        })
    }
  }

  // onChange for amount
  onAmountChange(e){
    const { name, value } = e.target;
    if(e){
    this.setState({
        [name]: value
      })
    }

    // Identify whether it's int or not
    var parsedValue = parseInt(value);

    // If it's improper, emit error and  make the button disable
    if(value === "0" || "" || !parsedValue){
      this.setState({
        invalid: true,
        disabled: true
      })
    } else {
      this.setState({
        invalid: false,
        disabled: false
      })
    }
}

  // Update item
  onSubmit(){
      const updatedItem = {
        amount: this.state.amount,
        type_name: this.state.type_name,
        description: this.state.description
      }

      axios.post(`/api/items/${this.state.id}`, updatedItem)
            .then(res => console.log(res.data))
            .then(r => this.setState({ modal: false }))
            .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Button
            color="info"
            onClick={this.toggle}
            size="md"
            block
        >Edit</Button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit item</ModalHeader>
          <Form  onSubmit={this.onSubmit}>
            <ModalBody>  
                <FormGroup>
                    <Label for="amount">Amount</Label>
                    <Input
                        type="money"
                        name="amount"
                        value={this.state.amount}
                        id="amount"
                        placeholder="Type an amount"
                        onChange={this.onAmountChange}
                        valid={this.state.valid}
                        invalid={this.state.invalid}
                    />
                    <FormFeedback>Type Proper Number!!</FormFeedback>
                    <FormText>only Numbers Accepted</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="types">Select Type</Label>
                    <Input
                        type="select"
                        name="type_name"
                        id="type_name"
                        value={this.state.type_name}
                        onChange={this.onChange}
                    >
                        <option></option>
                        <option>foods</option>
                        <option>books</option>
                        <option>daiily goods</option>
                        <option>clothings</option>
                        <option>medical</option>
                        <option>others</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="discription">Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                        value={this.state.description}
                        onChange={this.onChange}
                    />
                </FormGroup>  
                </ModalBody>
            <ModalFooter>
                <Button color="dark" type="submit" disabled={this.state.disabled}>Submit</Button>  
                <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Form>
        </Modal>
        
      </div>
    );
  }
}