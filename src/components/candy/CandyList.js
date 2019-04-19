import React, { Component } from "react"
import { Link } from "react-router-dom"

class CandyList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="candyButton content">
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={
                            () => {
                                this.props.history.push("/candies/new")
                            }}
                    >
                        Add Candy
                </button>
                </div>
                <div className="content">
                    <h3>Candy</h3>
                    {
                        this.props.candies.map(candy =>
                            <div key={candy.id}>
                                <Link className="nav-link" to={`/candies/${candy.id}`}>{candy.name}</Link>
                                {"("}
                                {
                                    this.props.candyTypes.find(candyType => candy.candyTypeId === candyType.id).name
                                }{")"}
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default CandyList