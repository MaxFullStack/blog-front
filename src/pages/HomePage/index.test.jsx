import { render } from '@testing-library/react'
import HomePage from '.'

describe('Home Page', () => {
  it('renders Home Page', () => {
    render(<HomePage />)
  })
})