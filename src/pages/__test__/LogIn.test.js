import { render, screen } from '@testing-library/react'
import LogIn from '../LogIn.js'

//TEST WHAT IS RENDERED FOR THE USER TO SEE. Text that must appear in the LOG IN PAGE
test('The words Log In should render', ()=> {
  const { getByText } = render(<LogIn />)
  expect(getByText('Log In')).toBeInTheDocument()
})
,
test('The word Email: should render', ()=> {
  const { getByText } = render(<LogIn />)
  expect(getByText('Email:')).toBeInTheDocument()
}),
test('The word Password: In should render', ()=> {
  const { getByText } = render(<LogIn />)
  expect(getByText('Password:')).toBeInTheDocument()
}),
test('The instructions for new users to go create an account at sign up should be rendered', ()=> {
  const { getByText } = render(<LogIn />)
  expect(getByText('If you are a new user, you will need to create an account before you can join the chatrooms:')).toBeInTheDocument()
})
