import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Title from '../../components/title'


describe("Home tests:", () => {
  render(<Title title='Teste aqui' />)
  const title = screen.getByTestId("title")
  test('home to be defined and with correct content', () => {

    expect(title).toBeDefined()
    expect(title.textContent).toBe("Teste aqui")
  });
  
  test('home to be defined and not pass with incorrect content', () => {
    
    expect(title).toBeDefined()
    expect(title.textContent).not.toBe("Bla");
  });
})
