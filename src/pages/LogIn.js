import React from 'react'

//Data = Array of users 
const users = [
  {
    username: "Angelina",
    email: "hackers@nineties.com",
    password: "101101110"
  },
  {
    username: "Sandra",
    email: "erased@thenet.com",
    password: "fakepassword"
  }
]

//CONTROLLED COMPONENT controls input via state

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMesage: "",
      successMessage: "",
      email: "",
      password: ""
    }
  }

  onFormSubmit = (event) => {
    // prevent default page refresh on submit:
    event.preventDefault()
    //destructuring notation
    const { email, password } = this.state
    //Ensure that only one message is shown per log in ie if you user the wrong credentials it will say so, then if you use correct credentials it will say so, but not both.
    this.setState({
      errorMessage: "",
      successMessage: ""
    })

    const foundUser = users.find((user) => user.email === email)
    
    if (foundUser) {
      // these multiple if else statements could be replaced by a try catch
      //then also check the found user's password is equal to the password state
      if (foundUser.password === password) {
        this.setState({
          successMessage: "User successfully authenticated!"
        })
      } else {
        this.setState({
          errorMessage: "Wrong credentials have been entered"
        })
      }
    } else {
      //set some state to say that user hasn't been found and you're not authenticated
      this.setState({
        errorMessage: "Wrong credentials have been entered"
      })
    }
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    const { errorMessage, successMessage, email, password } = this.state
    return (
      <div className="logincontainer">
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
        <h2>Log In</h2>
        <form className="login-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" id="email" value={email} onChange={this.onInputChange} />
          <label htmlFor="password"> Password </label>
          <input type="password" name="password" id="password" value={password} onChange={this.onInputChange} />
          <br></br>
          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    )
  }
}

export default LogIn;


