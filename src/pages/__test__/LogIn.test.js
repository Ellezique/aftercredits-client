import { render, screen } from '@testing-library/react'
import LogIn from '../LogIn.js'

//TEST WHAT IS RENDERED FOR THE USER TO SEE. Text that must appear in the LOG IN PAGE
test('The words Log In should render', () => {
  const { getByText } = render(<LogIn />)
  expect(getByText('Log In')).toBeInTheDocument()
}),
  test('The following words should render: If you already have an account, please log in:', () => {
    const { getByText } = render(<LogIn />)
    expect(getByText('If you already have an account, please log in:')).toBeInTheDocument()
  }),
  test('The following words should render: If you are a new user, you will need to create an account before you can join the chatrooms:', () => {
    const { getByText } = render(<LogIn />)
    expect(getByText('If you are a new user, you will need to create an account before you can join the chatrooms:')).toBeInTheDocument()
  })
// ,

//FORM TEST
// describe('Login form', () => {
//   beforeEach(() => {
//     render(<LogIn />)
//   })
//   test("should have a text box and a submit button", () => {
//     expect(screen.getByRole('text')).toBeInTheDocument()
//     expect(screen.getByRole('email')).toBeInTheDocument()
//     expect(screen.getByRole('submit')).toBeInTheDocument()
//   })
// })