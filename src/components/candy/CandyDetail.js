import React, { Component } from "react"

export default class CandyDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="content">
                <div key={this.props.candy.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.candy.name}</h4>
                        <h6 className="card-title">({this.props.candyTypes.find(candyType => candyType.id === this.props.candy.candyTypeId).name})</h6>
                        <button onClick={
                            () => this.setState(
                                { saveDisabled: true },
                                () => this.props.delete()
                            )
                        }
                            disabled={this.state.saveDisabled}
                            className="card-link btn btn-danger">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}