import { render } from '@testing-library/react'
import Message from '../Message'

test('should include a username', ()=>{
  const { getByText } = render(<Message username="Charlie Chaplin"/>)
  expect(getByText("Charlie Chaplin")).toBeInTheDocument()
})