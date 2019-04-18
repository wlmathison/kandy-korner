import React, { Component } from "react"
import { Link } from "react-router-dom"

class StoreList extends Component {
    render() {
        return (
            <div className="content">
                <h3>Store Locations</h3>
                {
                    this.props.stores.map(store => 
                        <div key={store.id}>
                        <Link className="nav-link" to={`/stores/${store.id}`}>{store.name}</Link>
                        {store.address} | {store.phoneNumber}
                        </div>
                        )
                }
            </div>
        )
    }
}

export default StoreList