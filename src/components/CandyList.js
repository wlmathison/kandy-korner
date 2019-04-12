import React, { Component } from "react"

class CandyList extends Component {
    render() {
        return(
            <div>
                <h3>Candy</h3>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>
                            {candy.name}
                        </div>                    )
                }
            </div>
        )
    }
}

export default CandyList