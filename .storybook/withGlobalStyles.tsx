import { StoryFn } from '@storybook/addons';

import { GlobalStyles } from '../src/styles/global';

export const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)