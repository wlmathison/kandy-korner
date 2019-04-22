import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import { withRouter } from "react-router"
import StoreList from "./stores/StoreList"
import EmployeeList from "./employee/EmployeeList"
import CandyList from "./candy/CandyList"
import StoresManager from "../modules/StoresManager"
import EmployeesManager from "../modules/EmployeesManager"
import CandyTypesManager from "../modules/CandyTypesManager"
import CandiesManager from "../modules/CandiesManager"
import StoreDetail from "./stores/StoreDetail"
import EmployeeDetail from "./employee/EmployeeDetail"
import CandyDetail from "./candy/CandyDetail"
import EmployeeForm from "./employee/EmployeeForm.js"
import CandyForm from "./candy/CandyForm"
import Login from "./authentication/Login"
import EmployeeEditForm from "./employee/EmployeeEditForm"

class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    isAuthenticated = () => {
        if (sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null) {
            return true
        } else {
            return false
        }
    }

    componentDidMount() {
        const newState = {}

        StoresManager.getAll()
            .then(stores => newState.stores = stores)
            .then(() => EmployeesManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => CandiesManager.getAll())
            .then(candies => newState.candies = candies)
            .then(() => CandyTypesManager.getAll())
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

    addEmployee = (employee) => {
        EmployeesManager.post(employee)
            .then(() => EmployeesManager.getAll())
            .then(item => {
                this.props.history.push("/employees")
                this.setState({
                    "employees": item
                })
            })
    }

    updateEmployee = (editedEmployeeObject) => {
        return EmployeesManager.put(editedEmployeeObject)
            .then(() => EmployeesManager.getAll())
            .then(employees => {
                this.setState({
                    "employees": employees
                })
            })
    }

    addCandy = (candy) => {
        CandiesManager.post(candy)
            .then(() => CandiesManager.getAll())
            .then(item => {
                this.props.history.push("/candies")
                this.setState({
                    "candies": item
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <StoreList stores={this.state.stores} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList employees={this.state.employees} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} employees={this.state.employees} addEmployee={this.addEmployee} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <CandyList deleteCandy={this.deleteCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/candies/new" render={(props) => {
                    return <CandyForm {...props} candies={this.state.candies} candyTypes={this.state.candyTypes} addCandy={this.addCandy} />
                }} />
                <Route path="/stores/:storeId(\d+)" render={(props) => {
                    let store = this.state.stores.find(store =>
                        store.id === parseInt(props.match.params.storeId))
                    if (!store) {
                        store = { id: 404, name: "Store not found" }
                    }
                    return <StoreDetail store={store} delete={() => this.delete(StoresManager, store.id, "stores")} />
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId))
                    if (!employee) {
                        employee = { id: 404, name: "Employee not found" }
                    }
                    return <EmployeeDetail employee={employee} delete={() => this.delete(EmployeesManager, employee.id, "employees")} />
                }} />
                <Route path="/employees/:employeeId(\d+)/edit" render={(props) => {
                    return <EmployeeEditForm {...props} employees={this.state.employees} updateEmployee={this.updateEmployee} />
                }} />
                <Route path="/candies/:candyId(\d+)" render={(props) => {
                    let candy = this.state.candies.find(candy =>
                        candy.id === parseInt(props.match.params.candyId))
                    if (!candy) {
                        candy = { id: 404, name: "Candy not found" }
                    }
                    return <CandyDetail candy={candy} candyTypes={this.state.candyTypes} delete={() => this.delete(CandiesManager, candy.id, "candies")} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)