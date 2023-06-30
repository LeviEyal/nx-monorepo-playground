import { render } from '@testing-library/react';

import Kaki from './kaki';

describe('Kaki', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Kaki />);
    expect(baseElement).toBeTruthy();
  });
});
