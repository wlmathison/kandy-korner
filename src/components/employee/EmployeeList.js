import React, { Component } from "react"
import { Link } from "react-router-dom"

class EmployeeList extends Component {
    render() {
        return (
            <div className="content">
                <h3>Employees</h3>
                {
                    this.props.employees.map(employee => 
                        <div key={employee.id}>
                        <Link className="nav-link" to={`/employees/${employee.id}`}>{employee.name}</Link>
                        </div>
                        )
                }
            </div>
        )
    }
}

export default EmployeeList