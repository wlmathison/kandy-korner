import React, { Component } from "react"

class CandyList extends Component {
    render() {
        return(
            <div className="content">
                <h3>Candy</h3>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id }>
                            {candy.name}
                            { } of type { }
                            {
                              this.props.candyTypes.find(candyType => candy.candyTypeId === candyType.id).name
                            }
                        </div>
                        )
                }
            </div>
        )
    }
}

export default CandyList