import React, { Component } from "react"
import { Link } from "react-router-dom"

class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="employeeButton content">
                    <button
                        className="btn btn-success"
                        type="submit"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Add Employee
                        </button>
                </div>
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
            </React.Fragment>
        )
    }
}

export default EmployeeList