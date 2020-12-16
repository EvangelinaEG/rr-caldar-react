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
      skillId:'',
      description:'',
      stock:0
    },
    modalInsert: false,
  }

  editBoilerType = id => {
    const bt = {...this.state.data.filter(boilertype => boilertype.id === id)}
    if(this.state.form.id){
      this.setState({
        form:{
          id: bt.id,
          skillId: bt.skillId,
          description: bt.description,
          stock: bt.stock
        },
      modalInsert: false
      });
    }
  };

  delBoilerType = id =>{
    this.setState({
      data: {...this.state.data.filter(boilertype => boilertype.id !== id)}
    })
  }
  addBoilerType = (id, skillId, description, stock) =>{
    const newBoilerType = {
      id: this.state.data.length+1,
      skillId,
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
        <ListBoilerTypes key="" listboilertypes={this.state.data} editBoilerType={this.editBoilerType} delBoilerType={this.delBoilerType}/>
      </Container>
      </div>
      <Modal  isOpen={this.state.modalInsert}>
        <ModalHeader >
        <h3>{this.state.form.id ? "Edit boilerType" : "Add new boilerType"}</h3>
        </ModalHeader>
        <ModalBody>
        <AddBoilerType form={this.state.form} data={this.state.data} addBoilerType={this.addBoilerType}/>
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

