import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
      <h1>SIGN UP PAGE</h1>
      <Link to='/LogIn'>Log In</Link>
    </div>
  )
}

export default SignUp



// import React from 'react'

// const users = [
//   {
//     username: "Angelina",
//     email: "hackers@nineties.com",
//     password: "101101110"
//   },
//   {
//     username: "Sandra",
//     email: "erased@thenet.com",
//     password: "fakepassword"
//   }
// ]

// class LogIn extends React.Component {
//   render() {
//     console.log(users)
//     return (
//       <div className="logincontainer">
//         <h2>Log In</h2>
//         <form className="login-form">
//           <label htmlFor="username"> Username </label>
//           <input type="text" name="username" id="username" />
//           <label htmlFor="email"> Email </label>
//           <input type="text" name="email" id="email" />
//           <label htmlFor="password"> Password </label>
//           <input type="password" name="password" id="password" />
//           <br></br>
//           <input type="submit" value="Submit" id="submit"/>
//         </form>
//       </div>
//     )
//   }
// }

// export default LogIn;