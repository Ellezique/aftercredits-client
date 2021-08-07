import { render, screen } from '@testing-library/react'
import Map from "../Map"

//TEST WHAT IS RENDERED FOR THE USER TO SEE. Text that must appear in the MAP COMPONENT
test('The words Physical Address should render from the Map component', ()=> {
  const { getByText } = render(<Map />)
  expect(getByText('Physical Address')).toBeInTheDocument()
}),
test('The disclaimer words should render from the Map component', ()=> {
  const { getByText } = render(<Map />)
  expect(getByText('This is a student project completed for Coder Academy. If AfterCredits did exist, we would have a physical address:')).toBeInTheDocument()
}),
test('The words AfterCreditsshould render from the Map component', ()=> {
  const { getByText } = render(<Map />)
  expect(getByText('AfterCredits')).toBeInTheDocument()
}),
test('The words Actually Coder Academy should render from the Map component', ()=> {
  const { getByText } = render(<Map />)
  expect(getByText('(Actually Coder Academy)')).toBeInTheDocument()
}),
test('The words Level 3/116 Adelaide St, should render from the Map component', ()=> {
  const { getByText } = render(<Map />)
  expect(getByText('Level 3/116 Adelaide St,')).toBeInTheDocument()
}),
test('The words Brisbane City should render from the Map component', ()=> {
  const { getByText } = render(<Map />)
  expect(getByText('Brisbane City')).toBeInTheDocument()
}),test('The words QLD 4000 should render from the Map component', ()=> {
  const { getByText } = render(<Map />)
  expect(getByText('QLD 4000')).toBeInTheDocument()
})

//THE Bing map should render BUT this test will fail: Cannot find module 'bingmaps-react' from 'src/components/Map.js'- this error has been reported to the package developer: https://github.com/milespratt/bingmaps-react/issues/32
