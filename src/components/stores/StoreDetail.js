import React, { Component } from "react"

export default class Store extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="content">
                <div key={this.props.store.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.store.name}
                        </h4>
                        <h4 className="card-title">
                            {this.props.store.address}
                        </h4>
                        <h5 className="card-title">
                            {this.props.store.phoneNumber}
                        </h5>
                        <button onClick={
                            () => this.setState(
                                { saveDisabled: true },
                                () => this.props.delete()
                            )
                        }
                            disabled={this.state.saveDisabled}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}