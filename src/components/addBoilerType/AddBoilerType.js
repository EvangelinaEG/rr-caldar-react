import React, { Component } from "react";
import "./AddBoilerType.css";
//import { Timestamp } from "mongodb";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup, Form, Input} from 'reactstrap';
class AddBoilerType extends Component{
  state = {
    id: "",
    skillId: "",
    description: "",
    stock: ""
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.form.id) {
      this.handleEdit(this.props.form);
    }
  }
  handleEdit = (boilertype) => {
    this.setState({
      id: boilertype.id,
      skillId: boilertype.skillId,
      description: boilertype.description,
      stock: boilertype.stock,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateBoilerType(
        this.state.id,
        this.state.skillId,
        this.state.description,
        this.state.stock,
      );
    } else {
      this.props.addBoilerType(
        this.state.id,
        this.state.skillId,
        this.state.description,
        this.state.stock
      );
    }
    this.setState({
      id: "",
      skillId: "",
      description: "",
      stock: "",
    });
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
        <Form  style={{ display: 'flex' }} onSubmit={this.onSubmit}>
            <FormGroup>
              <Input type="text" className="form-control" name="id" id="id" placeholder="Id" readOnly value={(this.state.id)? this.state.id : this.props.data.length+1} />
            </FormGroup>
            <FormGroup>
              <Input type="text" className="form-control" name="skillId" id="skillId" value={this.state.skillId} placeholder="skillId" defaulvalue="" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Input type="text" className="form-control" name="description" id="description" value={this.state.description} placeholder="Description" defaulvalue="" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Input type="text" className="form-control" name="stock" id="description" value={this.state.stock} placeholder="stock" defaulvalue="" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Input type="submit" color="success" value="Add" className="btn"/>
            </FormGroup>
        </Form>
    )
}
}
export default AddBoilerType;