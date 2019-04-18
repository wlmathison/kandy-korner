import React, { Component } from "react"
import { Route } from "react-router-dom"
import { withRouter } from "react-router"
import StoreList from "./stores/StoreList"
import EmployeeList from "./EmployeeList"
import CandyList from "./candy/CandyList"
import StoresManager from "../modules/StoresManager"
import EmployeesManager from "../modules/EmployeesManager"
import CandyTypesManager from "../modules/CandyTypesManager"
import CandiesManager from "../modules/CandiesManager"
import StoreDetail from "./stores/StoreDetail"

class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        StoresManager.getAll()
            .then(stores => newState.stores = stores)
            .then(EmployeesManager.getAll)
            .then(employees => newState.employees = employees)
            .then(CandiesManager.getAll)
            .then(candies => newState.candies = candies)
            .then(CandyTypesManager.getAll)
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => this.setState(newState))
    }

    delete = (manager, id, stateItem) => {
        manager.delete(id)
            .then(() => manager.getAll())
            .then(item => {
                if (stateItem === "stores") {
                    this.props.history.push(`/`)
                } else {
                    this.props.history.push(`/${stateItem}`)
                }
                this.setState({
                    [stateItem]: item
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/candy" render={(props) => {
                    return <CandyList deleteCandy={this.deleteCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/stores/:storeId(\d+)" render={(props) => {
                    let store = this.state.stores.find(store =>
                        store.id === parseInt(props.match.params.storeId))
                    if (!store) {
                        store = { id: 404, name: "Store not found" }
                    }
                    return <StoreDetail store={store} delete={() => this.delete(StoresManager, store.id, "stores")} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)