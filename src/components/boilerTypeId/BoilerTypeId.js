import React, { Component } from "react";
import "./BoilerTypeId.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';


export class BoilerTypeId extends Component{

    render () {
        return (
                    <tr>
                        <td>{this.props.boilertype.id}</td>
                        <td>{this.props.boilertype.skillsId}</td>
                        <td>{this.props.boilertype.description}</td>
                        <td>{this.props.boilertype.stock}</td>
                        <td><Button color="primary" onClick={this.props.editBoilerType.bind(this, this.props.boilertype.id)}>Edit</Button>
                        <Button color="danger" onClick={this.props.delBoilerType.bind(this, this.props.boilertype.id)} delBoilerTypes={this.props.delBoilerType}>Delete</Button></td>
                    </tr>
        )
    }
}
export default BoilerTypeId;