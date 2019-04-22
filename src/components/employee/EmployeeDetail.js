import React, { Component } from "react"

export default class EmployeeDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="content">
                <div key={this.props.employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.employee.name}</h4>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.delete()
                                )
                            }
                        }
                            className="card-link btn btn-danger">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}