import React, { Component } from "react"

export default class CandyForm extends Component {
    state = {
        candyName: "",
        candyTypeId: ""
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    constructNewCandy = event => {
        event.preventDefault()
        if (this.state.candyTypeId === "") {
            window.alert("Please select a candy type")
        } else {
            const candy = {
                name: this.state.candyName,
                candyTypeId: parseInt(this.state.candyTypeId)
            }
            this.props.addCandy(candy)
            this.props.history.push("/candies")
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="candyForm content">
                    <div className="form-group">
                        <label htmlFor="candyName">Candy Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="candyName"
                            placeholder="Candy Name" />
                        <select
                            defaultValue=""
                            name="candyType"
                            id="candyTypeId"
                            onChange={this.handleFieldChange}>
                            <option
                                value=""
                            >
                                Select a Candy Type
                            </option>
                            {this.props.candyTypes.map(candyType => (
                                <option
                                    key={candyType.id}
                                    id={candyType.id}
                                    value={candyType.id}>
                                    {candyType.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={this.constructNewCandy}
                    >
                        Submit
                        </button>
                </form>
            </React.Fragment>
        )
    }
}