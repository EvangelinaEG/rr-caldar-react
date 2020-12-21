import React, { Component } from "react";
import "./AddBoilerType.css";
//import { Timestamp } from "mongodb";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup, Form, Input, Button} from 'reactstrap';


class AddBoilerType extends Component{
  state = {
    id: "",
    skillsId: "",
    description: "",
    stock: ""
  };
  componentDidMount() {
    if (this.props.form.id) {
      this.handleEdit(this.props.form);
    }
  }

  handleEdit = (boilerTypes) => {
    this.setState({
      id: boilerTypes.id,
      skillsId: boilerTypes.skillsId,
      description: boilerTypes.description,
      stock: boilerTypes.stock,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.form.id) {
      this.props.updateBoilerType(
        this.state.id,
        this.state.skillsId,
        this.state.description,
        this.state.stock,
      );
    } else {
      this.props.addBoilerType(
        this.state.skillsId,
        this.state.description,
        this.state.stock
      );
    }
    this.setState({
      id: "",
      skillsId: "",
      description: "",
      stock: "",
    });
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
        <Form  style={{ display: 'flex' }} onSubmit={this.onSubmit}>
            <FormGroup>
              <Input type="text" name="id"  placeholder="Id" readOnly value={this.state.id? this.state.id : this.props.data.length+1} />
            </FormGroup>
            <FormGroup>
              <Input type="text" name="skillsId" value={this.state.skillsId? this.state.skillsId : ''} placeholder="skillsId"  onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Input type="text"  name="description" value={this.state.description? this.state.description : ''} defaultvalue="" placeholder="Description"  onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Input type="number"  name="stock"  value={this.state.stock? this.state.stock : ''} placeholder="stock"  onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Button type="submit" color="success"  className="btn">{(this.props.form.id)? "Save" : "Add"}</Button>
            </FormGroup>
        </Form>
    )
}
}
export default AddBoilerType;