import React, { Component } from "react"
import { Route } from "react-router-dom"
import StoreList from "./StoreList"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"

class ApplicationViews extends Component {
    storesLocationsFromApi = [
        {id: 1, name: "Nashville, TN", address: "201 North 2nd Avenue", phoneNumber: "(615) 730-8085"},
        {id: 2, name: "Asheville, NC", address: "21 Battery Park Avenue", phoneNumber: "(828) 575-2360"},
        {id: 3, name: "Kalamazoo, MI", address: "125 S. Kalamazoo Mall", phoneNumber: "(269) 888-2588"},
        {id: 4, name: "Seattle, WA", address: "127 Broadway Ave East, Suite B", phoneNumber: "(206) 328-4312"},
        {id: 5, name: "Surprise, AZ", address: "13681 North Litchfield Road, Suite 122", phoneNumber: "(623) 546-3499"}
    ]
    employeesFromApi = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" }
    ]
    candyTypesFromAPI = [
        {id: 1, name: "Candy Bar"},
        {id: 2, name: "Jelly Beans"},
        {id: 3, name: "Hard Candy"},
        {id: 4, name: "Taffy"},
        {id: 5, name: "Sour Candy"}
    ]
    individualCandyFromAPI = [
        {id: 1, name: "Snickers", candyTypeId: 1},
        {id: 2, name: "Jelly Belly", candyTypeId: 2},
        {id: 3, name: "Sweet Tarts", candyTypeId: 5},
        {id: 4, name: "Airheads", candyTypeId: 41},
        {id: 5, name: "Nerds", candyTypeId: 3}
    ]

    state = {
        stores: this.storesLocationsFromApi,
        employees: this.employeesFromApi,
        candyTypes: this.candyTypesFromAPI,
        candies: this.individualCandyFromAPI
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
                    return <CandyList candies={this.state.candies} />
                }} />                       
            </React.Fragment>             
        )
    }
}

export default ApplicationViews