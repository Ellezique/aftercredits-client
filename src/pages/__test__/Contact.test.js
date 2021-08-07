import { render, screen } from '@testing-library/react'
import Contact from '../Contact.js'

//TEST WHAT IS RENDERED FOR THE USER TO SEE. Text that must appear in the CONTACT PAGE
test('The words Project built by, should render', ()=> {
  const { getByText } = render(<Contact />)
  expect(getByText('Project Built By:')).toBeInTheDocument()
})
,
test('The name Gizelle, should render', ()=> {
  const { getByText } = render(<Contact />)
  expect(getByText('Gizelle')).toBeInTheDocument()
}),
test('The text for the github link should render', ()=> {
  const { getByText } = render(<Contact />)
  expect(getByText('https://github.com/Ellezique')).toBeInTheDocument()
}),
test('The name Chris, should render', ()=> {
  const { getByText } = render(<Contact />)
  expect(getByText('Chris')).toBeInTheDocument()
}),
test('The github link should render', ()=> {
  const { getByText } = render(<Contact />)
  expect(getByText('https://github.com/chris-gibs')).toBeInTheDocument()
}),
test('The words Background Credits should render', ()=> {
  const { getByText } = render(<Contact />)
  expect(getByText('Background Credits:')).toBeInTheDocument()
}),
test('The words  Mikhail Gorbunov, Motion Designer should render', ()=> {
  const { getByText } = render(<Contact />)
  expect(getByText('Mikhail Gorbunov, Motion Designer')).toBeInTheDocument()
}),
test('The words Cia Motions should render', ()=> {
  const { getByText } = render(<Contact />)
  expect(getByText('Cia Motions')).toBeInTheDocument()
})

//THE Bing map should render BUT this test will fail: Cannot find module 'bingmaps-react' from 'src/components/Map.js'- this error has been reported to the package developer: https://github.com/milespratt/bingmaps-react/issues/32
