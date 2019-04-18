import React, { Component } from "react"
import { Link } from "react-router-dom"

class CandyList extends Component {
    render() {
        return (
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
        )
    }
}

export default CandyList