import React, { Component } from "react"
import EmployeesManager from "../../modules/EmployeesManager";

export default class EmployeeEditForm extends Component {
    state = {
        name: ""
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = event => {
        event.preventDefault()
        const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.name
        }

        this.props.updateEmployee(editedEmployee)
            .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        EmployeesManager.get(this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    name: employee.name
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm content">
                    <div className="form-group">
                        <label htmlFor="employeeName">
                            Employee Name
                        </label>
                        <input
                            type="text"
                            required
                            id="name"
                            value={this.state.name}
                            onChange={this.handleFieldChange}
                            className="form-control"
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={this.updateExistingEmployee}
                    >
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}