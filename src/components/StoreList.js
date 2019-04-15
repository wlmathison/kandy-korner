import React, { Component } from "react"

class StoreList extends Component {
    render() {
        return (
            <div className="content">
                <h3>Store Locations</h3>
                {
                    this.props.stores.map(store => 
                        <div key={store.id}>
                        {store.name} | {store.address} | {store.phoneNumber}
                        </div>
                        )
                }
            </div>
        )
    }
}

export default StoreList