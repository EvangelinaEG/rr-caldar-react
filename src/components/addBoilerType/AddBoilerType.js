import React, { Component } from "react";
import "./AddBoilerType.css";
//import { Timestamp } from "mongodb";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup, Form, Input} from 'reactstrap';
class AddBoilerType extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: this.props.data,
      form:{
      id: '',
      description:'',
      stock:0
      },
    modalInsert: false
    }
  }
    onsubmit = (e) => {
      e.preventDefault();
      //this.props.AddBoilerType(this.state);
      this.setState({id: ''});
      this.setState({description: ''});
      this.setState({stock: ''});
    }
   handleChange=(e)=>{
     this.setState({
      data: this.props.data,
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
     });
  }
   insert=()=> {
    var newboilertype = {...this.state.form};
    newboilertype.id = this.state.data.length+1;
    var list = this.state.data;
    list.push(newboilertype);
    this.setState({data: list, modalInsert: false});
  }
render() {
    return (
        <Form  style={{ display: 'flex' }}>
            <FormGroup>
              <Input type="text" className="form-control" name="id" id="id" placeholder="Id" readOnly value={this.props.data.length+1} />
            </FormGroup>
            <FormGroup>
              <Input type="text" className="form-control" name="skillId" id="skillId" value={this.props.data.skillId} placeholder="skillId" defaulvalue="" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Input type="text" className="form-control" name="description" id="description" value={this.props.data.description} placeholder="Description" defaulvalue="" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Input type="text" className="form-control" name="stock" id="description" value={this.props.data.stock} placeholder="stock" defaulvalue="" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Input type="submit" color="success" value="Add" className="btn" onClick={()=>this.insert()}/>
            </FormGroup>
        </Form>
    )
}
}
export default AddBoilerType;