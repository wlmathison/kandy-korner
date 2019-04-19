import React, { Component } from "react"

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    handleLogin = event => {
        event.preventDefault()
        if (this.state.email === "") {
            window.alert("Please enter email address")
        } else if (this.state.password === "") {
            window.alert("Please enter passowrd")
        } else {
            sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            )
            this.props.history.push("/")
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className=" loginForm content" onSubmit={this.handleLogin}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        type="email"
                        required=""
                        autoFocus=""
                        id="email"
                        onChange={this.handleFieldChange}
                        placeholder="Email address"
                    />
                    {" "}
                    <label htmlFor="inputPassword">Password</label>
                    <input
                        type="password"
                        required=""
                        id="password"
                        placeholder="Password"
                        onChange={this.handleFieldChange}
                    />
                    {" "}
                    <button
                        type="submit"
                    >
                        Sign in
                    </button>
                </form>
            </React.Fragment>
        )
    }
}