import { render } from '@testing-library/react'
import Button from '../Button'

test('should have text that is given as a prop', ()=>{
  const { getByText } = render(<Button text="Button Text"/>)
  expect(getByText("Button Text")).toBeInTheDocument()
})