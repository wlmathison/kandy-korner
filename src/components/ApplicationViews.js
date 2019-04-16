import React, { Component } from "react"
import { Route } from "react-router-dom"
import StoreList from "./StoreList"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"
import StoresManager from "../modules/StoresManager"
import EmployeesManager from "../modules/EmployeesManager"
import CandyTypesManager from "../modules/CandyTypesManager"
import CandiesManager from "../modules/CandiesManager";

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

    deleteCandy = id => {
        CandiesManager.removeAndList(id)
        .then(candies => this.setState({
            candies:candies
        }))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candy" render={(props) => {
                    return <CandyList deleteCandy={this.deleteCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />                       
            </React.Fragment>             
        )
    }
}

export default ApplicationViews