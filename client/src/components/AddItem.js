import React from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
 } from 'reactstrap';
 import axios from 'axios'

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      valid: false,
      invalid: false,
      amount: '',
      type_name: '',
      description: ''
    };

    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle(){
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onChange(e){
      const { name, value } = e.target;
      this.setState({
          [name]: value
        })

      if(value === null || "" || 0){
          this.setState = ({ invalid: true })
      } else {
        this.setState = ({ valid: true })
      }
  }

  onSubmit(e){
      e.preventDefault();

      const newItem = {
        amount: this.state.amount,
        type_name: this.state.type_name,
        description: this.state.description
      }

      axios.post('/api/items', newItem)
            .then(res => console.log(res.data))
            .then(r => this.setState({ modal: false }))
            .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Add Item</Button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
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
                        onChange={this.onChange}
                        valid={this.state.valid}
                        invalid={this.state.invalid}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="types">Select Type</Label>
                    <Input
                        type="select"
                        name="type_name"
                        id="type_name"
                        value={this.state.type_name}
                        onChange={this.onChange}
                        valid={this.state.valid}
                        invalid={this.state.invalid}
                    >
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
                        valid={this.state.valid}
                        invalid={this.state.invalid}
                    />
                </FormGroup>  
                </ModalBody>
            <ModalFooter>
                <Button color="dark">Submit</Button>  
                <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Form>
        </Modal>
        
      </div>
    );
  }
}