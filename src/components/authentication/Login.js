import React, { Component } from "react"

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        rememberMe: false
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
        } else if (this.state.rememberMe) {
            localStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }))
        } else {
            sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            )
        }
        this.props.history.push("/")
    }

    render() {
        return (
            <React.Fragment>
                <form className=" loginForm content" onSubmit={this.handleLogin}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <div>
                        <label htmlFor="inputEmail">Email address</label>
                        <input
                            type="email"
                            required=""
                            autoFocus=""
                            id="email"
                            onChange={this.handleFieldChange}
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="inputPassword">Password</label>
                        <input
                            type="password"
                            required=""
                            id="password"
                            placeholder="Password"
                            onChange={this.handleFieldChange}
                        />
                    </div>
                    <div>
                        <label>Remember Me</label>
                        <input
                            id="rememberMe"
                            type="checkbox"
                            onChange={this.handleFieldChange} />
                    </div>
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