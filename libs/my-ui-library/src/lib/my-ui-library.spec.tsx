import { render } from '@testing-library/react';

import MyUiLibrary from './my-ui-library';

describe('MyUiLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyUiLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
