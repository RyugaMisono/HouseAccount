import React, { Component } from 'react'
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

export default class EditItem extends Component {
  render() {
    return (
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
    )
  }
}
