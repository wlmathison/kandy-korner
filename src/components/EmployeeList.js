import React, { Component } from "react"

class EmployeeList extends Component {
    render() {
        return (
            <div>
                <h3>Employees</h3>
                {
                    this.props.employees.map(employee => 
                        <div key={employee.id}>
                        {employee.name}
                        </div>
                        )
                }
            </div>
        )
    }
}

export default EmployeeList