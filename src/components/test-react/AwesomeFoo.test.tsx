import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import AwesomeFoo from './AwesomeFoo';

describe('AwesomeFoo Component', () => {
  it('renders the correct content', () => {
    // Renderiza el componente
    render(<AwesomeFoo />);

    // Selecciona el elemento usando el atributo 'data-qa'
    const element = document.querySelector('[data-qa="awesome-foo"]');

    // Verifica que esté en el DOM
    expect(element).toBeInTheDocument();
    // expect(element).toHaveTextContent("I'm an awesome component that says Foo!");
  });
});
