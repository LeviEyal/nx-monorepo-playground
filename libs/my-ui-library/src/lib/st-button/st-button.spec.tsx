import { render } from '@testing-library/react';

import StButton from './st-button';

describe('StButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StButton />);
    expect(baseElement).toBeTruthy();
  });
});
