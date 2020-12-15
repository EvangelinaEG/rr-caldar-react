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
        <ListBoilerTypes key="" listboilertypes={this.state.data}/>
      </Container>
      </div>
      <Modal  isOpen={this.state.modalInsert}>
        <ModalHeader >
        </ModalHeader>
        <ModalBody>
        <AddBoilerType form={this.state.form} data={this.state.data} />
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

