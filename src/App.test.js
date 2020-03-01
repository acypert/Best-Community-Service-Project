import React from 'react';
import { render } from '@testing-library/react';
import Services from './views/Services';

test('renders learn react link', () => {
  const { getByText } = render(<Services />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
