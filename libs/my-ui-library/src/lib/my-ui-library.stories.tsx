import type { Meta } from '@storybook/react';
import { MyUiLibrary } from './my-ui-library';

const Story: Meta<typeof MyUiLibrary> = {
  component: MyUiLibrary,
  title: 'MyUiLibrary',
};
export default Story;

export const Primary = {
  args: {},
};
