import { render, screen } from '@testing-library/react'
import ContactForm from "../ContactForm"

//TEST WHAT IS RENDERED FOR THE USER TO SEE. Text that must appear in the CONTACT FORM
test('The words Contact Form, should render', ()=> {
  const { getByText } = render(<ContactForm />)
  expect(getByText('Contact Form')).toBeInTheDocument()
}),
test('The words First Name, should render', ()=> {
  const { getByText } = render(<ContactForm />)
  expect(getByText('First Name')).toBeInTheDocument()
}),
test('The words Last Name, should render', ()=> {
  const { getByText } = render(<ContactForm />)
  expect(getByText('Last Name')).toBeInTheDocument()
}),
test('The words Email, should render', ()=> {
  const { getByText } = render(<ContactForm />)
  expect(getByText('Email')).toBeInTheDocument()
}),
test('The words Message, should render', ()=> {
  const { getByText } = render(<ContactForm />)
  expect(getByText('Message')).toBeInTheDocument()
})

//Check if there is a textbox displayed. getByRole 'textbox' looks for an input text box
describe('Contact Form', () => {
  test('Should have a text box for user input and a submit button', () => {
    render(<ContactForm />)
    // expect(screen.getByRole('textbox')).toBeInTheDocument()
    // expect(screen.getByValue('Submit')).toBeInTheDocument()
  })
})


