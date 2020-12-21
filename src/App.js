//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';


import data from './data/boiler-types.js';
import ListBoilerTypes from './components/listBoilerTypes/ListBoilerTypes.js';
import AddBoilerType from './components/addBoilerType/AddBoilerType.js';

//const mongoose = require('mongoose');
//const BoilerTypes = require('./models/boiler-types.js')(mongoose);

class App extends React.Component{

  state = {
    data: data,
    form:{
      id: '',
      skillsId:'',
      description:'',
      stock:0
    },
    modalInsert: false,
  }

  editBoilerType = (id) => {
      this.state.data.map((bt) => {
        if (bt.id === id) {
          this.setState({
            form:
            {
            id : bt.id,
            skillsId : bt.skillsId,
            description : bt.description,
            stock : bt.stock
            },
          modalInsert: true
      })}
      return bt;
  })};


  updateBoilerType = (id, skillsId, description, stock) => {
    this.setState({
      data: this.state.data.map((bt) => {
        if (bt.id === id) {
          bt.skillsId = skillsId;
          bt.description = description;
          bt.stock = stock;
        }
        return bt;
      }),
      modalInsert: false,
    });
  };
  delBoilerType = (id) =>{
    this.setState({data: [...this.state.data.filter(boilertype => boilertype.id !== id)] });
  }
  addBoilerType = (skillsId, description, stock) =>{
    const newBoilerType = {
      id: this.state.data.length+1,
      skillsId,
      description,
      stock
    };

    this.setState({ data: [...this.state.data, newBoilerType], modalInsert:false });
  }

  showModal=()=>{
    this.setState({modalInsert: !this.state.modalInsert});
  }

  hideModal=()=>{
    this.setState({modalInsert: false});
  }

  render(){
    return(
      <>
      <div>
      <Container className="container">
        <Button color="success" onClick={this.showModal} >New Boiler Type</Button>
        <ListBoilerTypes listboilertypes={this.state.data} editBoilerType={this.editBoilerType} delBoilerType={this.delBoilerType}/>
      </Container>
      </div>
      <Modal  isOpen={this.state.modalInsert}>
      {console.log(this.state.form)}
        <ModalHeader >
        <h3>{this.state.form.id ? "Edit boilerType" : "Add new boilerType"}</h3>
        </ModalHeader>
        <ModalBody>
        <AddBoilerType form={this.state.form} data={this.state.data} updateBoilerType={this.updateBoilerType} addBoilerType={this.addBoilerType}/>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={this.hideModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}


export default App;

