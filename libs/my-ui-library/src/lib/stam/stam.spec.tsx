import { render } from '@testing-library/react';

import Stam from './stam';

describe('Stam', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Stam />);
    expect(baseElement).toBeTruthy();
  });
});
