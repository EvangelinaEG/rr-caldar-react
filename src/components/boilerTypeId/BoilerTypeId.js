import React, { Component } from "react";
import "./BoilerTypeId.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';


export class BoilerTypeId extends Component{

    handleDelete = () => this.props.delBoilerType(this.props.boilertype.id)
    handleEdit = () => this.props.editBoilerType(this.props.boilertype.id)

    render () {
        return (
                    <tr>
                        <td>{this.props.boilertype.id}</td>
                        <td>{this.props.boilertype.description}</td>
                        <td>{this.props.boilertype.stock}</td>
                        <td><Button color="primary" onClick={this.handleEdit} editBoilerType={this.props.editBoilerType}>Edit</Button>
                        <Button color="danger" onClick={this.handleDelete} delBoilerTypes={this.props.delBoilerType}>Delete</Button></td>
                    </tr>
        )
    }
}
export default BoilerTypeId;