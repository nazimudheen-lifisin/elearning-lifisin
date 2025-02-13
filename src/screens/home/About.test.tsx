import { render, screen } from '@testing-library/react'
import About from '@/screens/home/About'

test('About page run', () => { 
    render(<About />)

    const value = screen.getByText('Something')
})