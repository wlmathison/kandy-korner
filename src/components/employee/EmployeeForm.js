import React, { Component } from "react"

export default class EmployeeForm extends Component {
    state = {
        employeeName: ""
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    constructNewEmployee = event => {
        event.preventDefault()
        const employee = {
            name: this.state.employeeName
        }
        this.props.addEmployee(employee)
        this.props.history.push("/employees")
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm content">
                    <div className="form-group">
                    <label htmlFor="employeeName">Employee Name</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="employeeName"
                        placeholder="Employee Name" />
                    </div>
                    <button 
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.constructNewEmployee}
                    >
                    Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}