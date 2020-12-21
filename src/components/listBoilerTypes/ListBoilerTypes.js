import React, {Component} from 'react';
import BoilerTypeId from '../boilerTypeId/BoilerTypeId.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';

class ListBoilerTypes extends Component{
    render(){
        return  (
            <Table className="table-container">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>skillsId</th>
                    <th>description</th>
                    <th>Stock</th>
                    <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.listboilertypes.map((boilertype)=>(
                        <BoilerTypeId key={boilertype.id} boilertype={boilertype} editBoilerType={this.props.editBoilerType} delBoilerType={this.props.delBoilerType}/>
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default ListBoilerTypes;