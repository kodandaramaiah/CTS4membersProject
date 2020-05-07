import React, { Component } from 'react'
import { register } from './UserFunctions'
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      mobilenum:'',
      address:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      mobilenum:this.state.mobilenum,
      address:this.state.address
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form Validate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required

                />
              </div>
              <div className=
              "form-group">
                <label htmlFor="mobilenum">Mobile number</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobilenum"
                  placeholder="enter mobile number"
                  value={this.state.mobilenum}
                  onChange={this.onChange}
                  required

                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="textarea"
                  height="30"
                  width="100"

                  className="form-control"
                  name="address"
                  placeholder="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  required

                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-danger btn-block"
              >
                Register!
              </button>
              <p className="small text-center mt-3">
            Already have account?Login<Link to="/Login">here</Link>
          </p>            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
