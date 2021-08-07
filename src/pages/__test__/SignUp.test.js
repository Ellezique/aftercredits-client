import { render, screen } from '@testing-library/react'
import SignUp from '../SignUp.js'

//TEST WHAT IS RENDERED FOR THE USER TO SEE. Text that must appear in the CSIGN UP PAGE
test('The words Sign Up should render', ()=> {
  const { getByText } = render(<SignUp />)
  expect(getByText('Sign Up')).toBeInTheDocument()
})
,
test('The words If you are a new user, you will need to create an account before you can join the chatrooms: should render', ()=> {
  const { getByText } = render(<SignUp />)
  expect(getByText('If you are a new user, you will need to create an account before you can join the chatrooms:')).toBeInTheDocument()
}),
test('The words Email: should render', ()=> {
  const { getByText } = render(<SignUp />)
  expect(getByText('Email:')).toBeInTheDocument()
}),
test('The words Username: should render', ()=> {
  const { getByText } = render(<SignUp />)
  expect(getByText('Username:')).toBeInTheDocument()
}),
test('The words Password: should render', ()=> {
  const { getByText } = render(<SignUp />)
  expect(getByText('Password:')).toBeInTheDocument()
}),
test('The words Confirm Password: should render', ()=> {
  const { getByText } = render(<SignUp />)
  expect(getByText('Confirm Password:')).toBeInTheDocument()
}),
test('The words If you already have an account, please log in: should render', ()=> {
  const { getByText } = render(<SignUp />)
  expect(getByText('If you already have an account, please log in:')).toBeInTheDocument()
})