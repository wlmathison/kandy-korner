import React, { Component } from "react"
import { Route } from "react-router-dom"
import StoreList from "./StoreList"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"

class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/stores")
            .then(results => results.json())
            .then(stores => newState.stores = stores)
            .then(() => fetch("http://localhost:5002/employees"))
            .then(results => results.json())
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/candies"))
            .then(results => results.json())
            .then(candies => newState.candies = candies)
            .then(() => fetch("http://localhost:5002/candyTypes"))
            .then(results => results.json())
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => this.setState(newState))
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
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />                       
            </React.Fragment>             
        )
    }
}

export default ApplicationViews